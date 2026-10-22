import Header from "./components/Header";
import QuemSomos from "./components/QuemSomos";
import Missao from "./components/Missao";
import Valores from "./components/Valores";
import FeiraDePerto from "./components/FeiraDePerto";
import Time from "./components/Time";
import Agradecimentos from "./components/Agradecimentos";
import "./SobreNos.css";

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
        <Agradecimentos />
      </main>
    </>
  );
}

export default SobreNos;