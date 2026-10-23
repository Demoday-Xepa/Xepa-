import { useState } from "react";
import Header from "../../components/Header/Header";
import TeamCarousel from "../../components/TeamCarousel/TeamCarousel";
import "./Sobre.css";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Excepteur sint occaecat cupidatat non proident.";

function VideoFeira() {
  const [tocando, setTocando] = useState(false);
  return (
    <div className="video">
      {tocando ? (
        <video src="/videos/feira.mp4" controls autoPlay />
      ) : (
        <>
          <img src="/images/sobre/feira-video.jpg" alt="Movimento em uma feira de rua" />
          <button type="button" className="video__play" aria-label="Reproduzir vídeo" onClick={() => setTocando(true)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          </button>
        </>
      )}
    </div>
  );
}

export default function Sobre() {
  return (
    <>
      <Header />
      <main className="sobre">
        <section className="quem">
          <h1>Quem somos Nós</h1>
          <p>{LOREM}</p>
          <p>{LOREM}</p>
        </section>

        <section className="bloco">
          <div className="bloco__midia">
            <img src="/images/sobre/missao.jpg" alt="Feirante cortando frutas na banca" />
          </div>
          <div className="bloco__texto">
            <h2>Missão</h2>
            <p>{LOREM}</p>
          </div>
        </section>

        <section className="bloco bloco--invertido">
          <div className="bloco__texto">
            <h2>Valores</h2>
            <p>{LOREM}</p>
          </div>
          <div className="bloco__midia">
            <img src="/images/sobre/valores.jpg" alt="Tomates e legumes na banca da feira" />
          </div>
        </section>

        <section className="secao">
          <h2>Conheça a feira de perto</h2>
          <p>{LOREM}</p>
          <VideoFeira />
        </section>

        <section className="secao">
          <h2>Conheça nosso time !</h2>
          <p>{LOREM}</p>
          <TeamCarousel />
        </section>

        <section className="secao">
          <h2>Agradecimentos</h2>
          <p>{LOREM}</p>
          <img className="agradecimentos" src="/images/sobre/agradecimentos.jpg" alt="Família sorrindo ao ar livre" />
        </section>
      </main>
    </>
  );
}
