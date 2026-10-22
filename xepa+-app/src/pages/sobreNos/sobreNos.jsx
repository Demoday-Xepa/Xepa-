import Header from "./components/Header";
import QuemSomos from "./components/QuemSomos";
import Missao from "./components/Missao";
import Valores from "./components/Valores";
import FeiraDePerto from "./components/FeiraDePerto";
import Time from "./components/Time";
import Agradecimento from "./components/Agradecimento";
import "./css/SobreNos.css";

function SobreNos() {
  return (
    <>
      <Header />

      <main className="sobre">
        <QuemSomos />
        <Missao />
        <Valores />
        <FeiraDePerto />
        <Time />
        <Agradecimento />
      </main>
    </>
  );
}

export default SobreNos;