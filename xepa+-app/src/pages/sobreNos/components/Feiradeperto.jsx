import { useState } from "react";
import LOREM from "./lorem";
import "./FeiraDePerto.css";

function FeiraDePerto() {
  const [tocando, setTocando] = useState(false);

  return (
    <section className="secao">
      <h2>Conheça a feira de perto</h2>
      <p>{LOREM}</p>

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
    </section>
  );
}

export default FeiraDePerto;