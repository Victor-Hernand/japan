/* PrivacyPolicy — Política de privacidad y uso de datos de Japan HN.
 * Se muestra solo como ventana emergente (PrivacyPolicyDialog), abierta desde el formulario de cotización de /contacto.
 * El texto describe únicamente los datos que el sitio realmente trata.
 */
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ADDRESS, EMAIL, PHONE_DISPLAY } from "@/lib/data";

type Section = { title: string; paragraphs: string[] };

const UPDATED = "30 de octubre de 2026";

const INTRO =
  "Esta política explica qué datos personales trata Japan HN cuando usted visita capgrupo.com, japanhn.com o usa el formulario de cotización, para qué los usamos, con quién los compartimos y cómo puede ejercer sus derechos.";

const SECTIONS: Section[] = [
  {
    title: "1. Responsable",
    paragraphs: [
      "Responsable del tratamiento: Japan HN, distribuidora de repuestos japoneses del Grupo CAP Honduras.",
      `Domicilio: ${ADDRESS}, Tegucigalpa, Honduras. Teléfono y WhatsApp: ${PHONE_DISPLAY}. Correo para temas de privacidad: ${EMAIL}.`,
      "Al usar el sitio o enviar el formulario de cotización, usted declara haber leído esta política.",
    ],
  },
  {
    title: "2. Datos que tratamos",
    paragraphs: [
      "Formulario de cotización: nombre, correo electrónico, teléfono y el mensaje que escriba. El sitio no guarda estos datos en sus servidores: al enviar el formulario, el texto se abre en WhatsApp con sus datos prellenados y usted decide enviarlo.",
      "Conversaciones y correos: los mensajes que nos envíe por WhatsApp, correo electrónico o teléfono.",
      "Datos de navegación: páginas visitadas, tipo de navegador y sistema operativo, y la dirección IP, que se registran de forma agregada en nuestra analítica de visitas.",
      "Preferencia de tema: si elige el modo claro u oscuro, esa preferencia se guarda en su navegador. No se envía a nuestros servidores.",
      "No solicitamos datos sensibles (salud, religión, afiliación política, origen étnico o datos biométricos). Le pedimos que no los incluya en el mensaje de cotización.",
    ],
  },
  {
    title: "3. Finalidades",
    paragraphs: [
      "Atender su solicitud de cotización, responder sus consultas y dar seguimiento a pedidos y asesorías.",
      "Enviar información sobre productos, disponibilidad y precios relacionados con su solicitud.",
      "Generar estadísticas agregadas y anónimas para mejorar el sitio. No usamos sus datos con fines de publicidad ni los vendemos a terceros.",
      "Cumplir obligaciones legales, contables y de seguridad.",
    ],
  },
  {
    title: "4. Base legal y marco normativo",
    paragraphs: [
      "Tratamos sus datos con base en su consentimiento: usted lo otorga al marcar la casilla de aceptación y enviar el formulario o escribirnos. También en el interés legítimo de proteger el sitio y medir su uso de forma agregada, y en el cumplimiento de obligaciones legales en Honduras.",
      "A la fecha de esta política, Honduras no cuenta con una ley general de protección de datos personales. Nos regimos por la Constitución de la República, que garantiza el derecho a la intimidad y el hábeas data, y por la Ley sobre Justicia Constitucional (Decreto 244-2003), además de los principios de licitud, finalidad, proporcionalidad, calidad, seguridad y confidencialidad. Si se aprueba una ley específica, adecuaremos esta política en el plazo que esa ley establezca.",
    ],
  },
  {
    title: "5. Cookies y almacenamiento en su navegador",
    paragraphs: [
      "No usamos cookies publicitarias ni de seguimiento de terceros. La única información que el sitio guarda en su navegador es la preferencia de tema claro u oscuro, y puede borrarla desde la configuración de su navegador.",
      "Puede borrar o bloquear cookies desde la configuración de su navegador en cualquier momento.",
    ],
  },
  {
    title: "6. Servicios de terceros",
    paragraphs: [
      "WhatsApp: el botón de cotización abre una conversación en WhatsApp, operado por Meta. Los mensajes que envíe se rigen por la política de privacidad de WhatsApp.",
      "Google Fonts: para cargar las tipografías, su navegador se conecta a servidores de Google, que pueden registrar su dirección IP.",
      "Google Maps: la página de contacto muestra un mapa embebido de Google, sujeto a la política de privacidad de Google.",
      "Analítica de visitas: medimos el uso del sitio con una herramienta de estadísticas configurada por nosotros, que no usa cookies publicitarias.",
      "Redes sociales y enlaces externos: Facebook, Instagram, LinkedIn y el portal de empleo recruit.capgrupo.com abren sitios con sus propias políticas de privacidad. No somos responsables de sus prácticas.",
    ],
  },
  {
    title: "7. Con quién compartimos los datos",
    paragraphs: [
      "No vendemos ni cedemos datos personales a terceros con fines comerciales. Los datos solo se comparten con: el personal de Japan HN que atiende su solicitud; las empresas del Grupo CAP Honduras, cuando su consulta deba canalizarse a ellas; los proveedores tecnológicos que operan el sitio y la analítica, bajo obligación de confidencialidad; y las autoridades hondureñas, solo ante requerimiento judicial o administrativo válido.",
      "Algunos proveedores pueden procesar datos fuera de Honduras. En esos casos exigimos medidas de seguridad razonables.",
    ],
  },
  {
    title: "8. Seguridad de la información",
    paragraphs: [
      "Aplicamos medidas técnicas y organizativas razonables para proteger sus datos contra acceso no autorizado, pérdida o alteración, y limitamos el acceso a las personas que atienden sus solicitudes.",
      "Si ocurriera un incidente de seguridad que afecte sus datos, se lo comunicaremos en un plazo máximo de 72 horas desde que lo confirmemos, indicando el alcance y las medidas tomadas.",
    ],
  },
  {
    title: "9. Plazo de conservación",
    paragraphs: [
      "Solicitudes de cotización y conversaciones: 12 meses desde la última atención, salvo que pida antes su cancelación o que la ley exija conservarlos por más tiempo.",
      "Estadísticas de navegación: los datos se mantienen de forma agregada y anónima mientras sean útiles para medir el sitio.",
      "Vencido el plazo, los datos se eliminan de forma segura o se anonimizan.",
    ],
  },
  {
    title: "10. Sus derechos",
    paragraphs: [
      "Puede solicitar acceso, rectificación, cancelación y oposición sobre sus datos (derechos ARCO), y una copia en formato legible. Puede revocar en cualquier momento la autorización que nos dio.",
      `Para ejercerlos, escriba a ${EMAIL} indicando el derecho que ejerce, los datos a los que se refiere y el medio por el que nos contactó. Responderemos en un plazo máximo de 10 días hábiles; si la solicitud es compleja, el plazo podrá ampliarse 10 días más, y se lo comunicaremos.`,
      "Si no recibe respuesta o no está conforme, puede acudir a la acción de hábeas data ante los tribunales hondureños competentes.",
    ],
  },
  {
    title: "11. Menores de edad",
    paragraphs: [
      "Nuestros servicios no están dirigidos a menores de 18 años. Si detectamos datos de un menor recopilados sin autorización, los eliminaremos.",
    ],
  },
  {
    title: "12. Cambios",
    paragraphs: [
      "Podemos actualizar esta política cuando cambien el sitio, los proveedores o la legislación aplicable. La versión vigente estará siempre disponible en esta ventana, con su fecha de última actualización.",
    ],
  },
];

/** Texto completo de la política, mostrado dentro de la ventana emergente. */
function PolicyText() {
  return (
    <>
      <p>{INTRO}</p>
      {SECTIONS.map((section) => (
        <div key={section.title} className="space-y-2">
          <h3 className="font-bold text-gray-900 text-base">{section.title}</h3>
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ))}
    </>
  );
}

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Si se pasa, la ventana muestra un botón para aceptar la política desde ahí */
  onAccept?: () => void;
};

/** Ventana emergente con la política completa, abierta desde el formulario de cotización. */
export function PrivacyPolicyDialog({ open, onOpenChange, onAccept }: DialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[85vh] flex flex-col gap-0 p-0 overflow-hidden">
        <DialogHeader className="shrink-0 px-6 pt-6 pb-4 border-b border-gray-200 text-left">
          <DialogTitle className="text-lg font-black text-gray-900">Política de privacidad y uso de datos</DialogTitle>
          <DialogDescription className="text-xs text-gray-500">Última actualización: {UPDATED}</DialogDescription>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5 space-y-6 text-sm text-gray-600 leading-relaxed">
          <PolicyText />
        </div>

        {onAccept && (
          <div className="shrink-0 flex flex-col-reverse sm:flex-row sm:justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="h-10 px-5 text-xs font-bold text-gray-700 border-gray-300 bg-white hover:bg-gray-100"
            >
              Cerrar
            </Button>
            <Button
              type="button"
              onClick={() => {
                onAccept();
                onOpenChange(false);
              }}
              className="h-10 px-6 text-xs font-bold text-white bg-[#ee2b2d] hover:bg-[#c92224] shadow-lg shadow-[#ee2b2d]/20"
            >
              He leído y acepto
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
