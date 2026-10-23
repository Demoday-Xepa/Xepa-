import { Navbar } from "@/modulos/usuario/componentes/navegacao/NavbarC.jsx";
import { Titulo } from '@/modulos/usuario/paginas/impacto/componentes/Titulo.jsx';
import { Dashboard } from '@/modulos/usuario/paginas/impacto/componentes/Dashboard.jsx';

export function Impacto() {
  return (
    <div>
      <Navbar />
        <Titulo />
        <Dashboard />
        
      
      
    </div>
  );
}
