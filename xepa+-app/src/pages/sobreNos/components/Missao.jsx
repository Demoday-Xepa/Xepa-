import LOREM from "./lorem";
import "./Bloco.css";

function Missao() {
  return (
    <section className="bloco">
      <div className="bloco__midia">
        <img src="/images/sobre/missao.jpg" alt="Feirante cortando frutas na banca" />
      </div>
      <div className="bloco__texto">
        <h2>Missão</h2>
        <p>{LOREM}</p>
      </div>
    </section>
  );
}

export default Missao;