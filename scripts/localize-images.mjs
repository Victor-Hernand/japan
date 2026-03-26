import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const dataFilePath = path.join(projectRoot, "client", "src", "lib", "data.ts");
const imagesOutDir = path.join(projectRoot, "client", "public", "images");

const indexToSlug = (i) => String(i).padStart(2, "0");

const parseStringValue = (input, key) => {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`${escapedKey}\\s*:\\s*"([^"]+)"`, "m");
  const match = input.match(re);
  return match?.[1] ?? null;
};

const parseGallerySrcs = (input) => {
  const galleryBlockRe = /export const GALLERY_IMAGES\s*=\s*\[([\s\S]*?)\]\s*;/m;
  const blockMatch = input.match(galleryBlockRe);
  if (!blockMatch) return [];
  const block = blockMatch[1];

  const srcRe = /src\s*:\s*"([^"]+)"\s*,?/g;
  const srcs = [];
  let m;
  while ((m = srcRe.exec(block)) !== null) {
    srcs.push(m[1]);
  }
  return srcs;
};

const urlToExt = (urlString) => {
  const u = new URL(urlString);
  const pathname = u.pathname || "";
  const ext = path.extname(pathname);
  return ext || "";
};

const urlToBasenameFromPath = (urlString) => {
  const u = new URL(urlString);
  const pathname = u.pathname || "";
  const base = path.basename(pathname);
  return base;
};

async function downloadToFile(url, outPath) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Fetch failed (${res.status}) for: ${url}`);
  }
  const arrayBuffer = await res.arrayBuffer();
  await fsp.mkdir(path.dirname(outPath), { recursive: true });
  await fsp.writeFile(outPath, Buffer.from(arrayBuffer));
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");

  if (!fs.existsSync(dataFilePath)) {
    throw new Error(`No existe: ${dataFilePath}`);
  }

  const dataTs = await fsp.readFile(dataFilePath, "utf8");

  const imageKeys = {
    heroBg: "hero-bg",
    ctaBg: "cta-bg",
    warehouse: "warehouse",
    suspension: "suspension",
    kybAmortiguadores: "kyb-amortiguadores",
    terminal555: "terminal-555",
    rotula555: "rotula-555",
    logoKyb: "logo-kyb",
    logo555: "logo-555",
  };

  const imagesToLocalize = [];

  for (const [key, slug] of Object.entries(imageKeys)) {
    const url = parseStringValue(dataTs, key);
    if (!url) continue;
    const ext = urlToExt(url);
    imagesToLocalize.push({
      oldUrl: url,
      slug,
      ext,
      localPath: `/images/${slug}${ext}`,
      outFile: path.join(imagesOutDir, `${slug}${ext}`),
    });
  }

  const gallerySrcs = parseGallerySrcs(dataTs);
  gallerySrcs.forEach((oldUrl, i) => {
    const ext = urlToExt(oldUrl);
    const slug = `gallery-${indexToSlug(i + 1)}`;
    imagesToLocalize.push({
      oldUrl,
      slug,
      ext,
      localPath: `/images/${slug}${ext}`,
      outFile: path.join(imagesOutDir, `${slug}${ext}`),
    });
  });

  // Filtrar duplicados por URL exacta
  const seen = new Set();
  const unique = [];
  for (const item of imagesToLocalize) {
    if (seen.has(item.oldUrl)) continue;
    seen.add(item.oldUrl);
    unique.push(item);
  }

  // Descargar
  console.log(`[localize-images] Imágenes a descargar/localizar: ${unique.length}`);
  for (const [i, item] of unique.entries()) {
    console.log(`[${i + 1}/${unique.length}] ${item.oldUrl}`);
    if (!dryRun) {
      await downloadToFile(item.oldUrl, item.outFile);
    }
  }

  // Reemplazar en data.ts
  if (!dryRun) {
    let updated = dataTs;
    for (const item of unique) {
      // Reemplazo literal: la URL completa existe tal cual en data.ts.
      updated = updated.split(item.oldUrl).join(item.localPath);
    }
    await fsp.writeFile(dataFilePath, updated, "utf8");
    console.log(`[localize-images] data.ts actualizado ✅`);
  } else {
    console.log(`[localize-images] --dry-run activado: no se modificó data.ts`);
  }

  // Verificación final
  const finalData = dryRun ? dataTs : await fsp.readFile(dataFilePath, "utf8");
  const remainingExternal = (finalData.match(/https?:\/\/[^"'\\s)]+\\.(png|jpe?g|gif|webp|svg|avif)(\\?[^"'\\s)]*)?/gim) ?? [])
    .filter(Boolean);
  console.log(`[localize-images] URLs de imágenes externas restantes: ${remainingExternal.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

