
import { Navbar } from "@/modulos/usuario/componentes/navegacao/NavbarC.jsx";
import { SecaoUm } from "@/modulos/usuario/paginas/inicio/componentes/SecaoUm.jsx";
import { SecaoDois } from "@/modulos/usuario/paginas/inicio/componentes/SecaoDois.jsx";

function HomeUsuario() {
  return (
    <div>
      <Navbar />
      <SecaoUm />
      <SecaoDois />
    </div>
  );
}

export default HomeUsuario;