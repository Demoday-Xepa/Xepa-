
import { Navbar } from "../../components/navbarCliente/navbarC";
import { SecaoUm } from "./componentes/secaoUm";
import { SecaoDois } from "./componentes/secaoDois";

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