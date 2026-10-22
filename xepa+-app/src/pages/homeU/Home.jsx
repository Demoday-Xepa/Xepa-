
import { Navbar } from "../../components/navbarCliente/navbarC";
import { SecaoUm } from '../homeU/componentes/secaoUm';
import { SecaoDois } from '../homeU/componentes/secaoDois';
import { SecaoTres} from '../homeU/componentes/secaoTres';
export function Home() {
  return (
    <div>
      <Navbar />
      <SecaoUm />
      <SecaoDois />
      <SecaoTres />
    </div>
  );
}

export default HomeUsuario;