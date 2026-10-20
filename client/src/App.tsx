import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/contacto"} component={Contacto} />
      <Route path={"/nosotros"} component={Nosotros} />
      <Route path={"/productos/:grupo"} component={Productos} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
