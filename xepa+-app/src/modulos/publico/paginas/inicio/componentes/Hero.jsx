
import '@/modulos/publico/paginas/inicio/estilos/Hero.css';
import mamao from '@/assets/imagens/pagina-inicial/mamao-home.png';
import abacaxi from '@/assets/imagens/pagina-inicial/abacaxi-home.png';
import melancia from '@/assets/imagens/pagina-inicial/melancia-home.png';
import kiwi from '@/assets/imagens/pagina-inicial/kiwi-home.png';
import goiaba from '@/assets/imagens/pagina-inicial/goiaba-home.png';
import uva from '@/assets/imagens/pagina-inicial/uva-home.png';

const frutas = [
  { classe: 'fruta-inicio--mamao', imagem: mamao },
  { classe: 'fruta-inicio--abacaxi', imagem: abacaxi },
  { classe: 'fruta-inicio--melancia', imagem: melancia },
  { classe: 'fruta-inicio--kiwi', imagem: kiwi },
  { classe: 'fruta-inicio--goiaba', imagem: goiaba },
  { classe: 'fruta-inicio--uva', imagem: uva },
];

export default function Hero() {
  return (
    <>
      <section className="secao-inicio" id="inicio">
        <div className="frutas-inicio" aria-hidden="true">
          {frutas.map((fruta) => (
            <img
              key={fruta.classe}
              className={`fruta-inicio ${fruta.classe}`}
              src={fruta.imagem}
              alt=""
            />
          ))}
        </div>

        <div className="conteudo-inicio">
          <h1>
            Menos desperdício,
            <br />
            mais alimento, mais futuro
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </div>
      </section>

      <div className="faixa-xepa" aria-label="Xepa+">
        {Array.from({ length: 16 }, (_, indice) => (
          <span key={indice}>XEPA+</span>
        ))}
      </div>
    </>
  );
}
