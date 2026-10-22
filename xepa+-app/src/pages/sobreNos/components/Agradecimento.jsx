import LOREM from "./lorem";
import "./Agradecimentos.css";

function Agradecimentos() {
  return (
    <section className="secao">
      <h2>Agradecimentos</h2>
      <p>{LOREM}</p>
      <img className="agradecimentos" src="/images/sobre/agradecimentos.jpg" alt="Família sorrindo ao ar livre" />
    </section>
  );
}

export default Agradecimentos;