import { useRef } from 'react';
import style from '@/modulos/usuario/paginas/inicio/estilos/Home.module.css';

export function SecaoQuatro() {
  const rolagemCompletas = useRef(null);
  const rolagemFrutas = useRef(null);

  function rolar(ref, direcao) {
    ref.current.scrollBy({ left: direcao * 364, behavior: 'smooth' });
  }

  return (
    <div className={style.container}>
      <h2 className={style.tituloSecao}>Xepas Completas</h2>

      <div className={style.carrossel}>
        <button
          className={style.setaesquerda}
          onClick={() => rolar(rolagemCompletas, -1)}
          aria-label="Voltar"
        >
          ‹
        </button>

        <div className={style.rolagem} ref={rolagemCompletas}>
          <div className={style.cardscompletos}>
            <img className={style.imagem} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHCyldJxdUs-g-KJr-ic-tMdCFLLOIfkFKqM6RGvU89RGiOTPMgg1vig&s=10" alt="Xepa Completa" />
            <h3 className={style.titulo}>Xepa Completa</h3>
            <span className={style.local}>Local</span>
            <p className={style.descricao}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <button className={style.botaocompleto}>Ver mais detalhes</button>
          </div>

          <div className={style.cardscompletos}>
            <img className={style.imagem} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHCyldJxdUs-g-KJr-ic-tMdCFLLOIfkFKqM6RGvU89RGiOTPMgg1vig&s=10" alt="Xepa Completa" />
            <h3 className={style.titulo}>Xepa Completa</h3>
            <span className={style.local}>Local</span>
            <p className={style.descricao}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <button className={style.botaocompleto}>Ver mais detalhes</button>
          </div>

          <div className={style.cardscompletos}>
            <img className={style.imagem} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHCyldJxdUs-g-KJr-ic-tMdCFLLOIfkFKqM6RGvU89RGiOTPMgg1vig&s=10" alt="Xepa Completa" />
            <h3 className={style.titulo}>Xepa Completa</h3>
            <span className={style.local}>Local</span>
            <p className={style.descricao}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <button className={style.botaocompleto}>Ver mais detalhes</button>
          </div>

          <div className={style.cardscompletos}>
            <img className={style.imagem} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHCyldJxdUs-g-KJr-ic-tMdCFLLOIfkFKqM6RGvU89RGiOTPMgg1vig&s=10" alt="Xepa Completa" />
            <h3 className={style.titulo}>Xepa Completa</h3>
            <span className={style.local}>Local</span>
            <p className={style.descricao}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <button className={style.botaocompleto}>Ver mais detalhes</button>
          </div>
        </div>

        <button
          className={style.setadireita}
          onClick={() => rolar(rolagemCompletas, 1)}
          aria-label="Avançar"
        >
          ›
        </button>
      </div>

      <h2 className={style.tituloSecao}>Xepa de Frutas</h2>

      <div className={style.carrossel}>
        <button
          className={style.setaesquerda}
          onClick={() => rolar(rolagemFrutas, -1)}
          aria-label="Voltar"
        >
          ‹
        </button>

        <div className={style.rolagem} ref={rolagemFrutas}>
          <div className={style.cardsfrutas}>
            <img className={style.imagem} src="https://i.redd.it/1rkhjau15hd81.jpg" alt="Xepa de Frutas" />
            <h3 className={style.titulo}>Xepa De Frutas</h3>
            <span className={style.local}>Local</span>
            <p className={style.descricao}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <button className={style.botaofrutas}>Ver mais detalhes</button>
          </div>

          <div className={style.cardsfrutas}>
            <img className={style.imagem} src="https://i.redd.it/1rkhjau15hd81.jpg" alt="Xepa de Frutas" />
            <h3 className={style.titulo}>Xepa De Frutas</h3>
            <span className={style.local}>Local</span>
            <p className={style.descricao}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <button className={style.botaofrutas}>Ver mais detalhes</button>
          </div>

          <div className={style.cardsfrutas}>
            <img className={style.imagem} src="https://i.redd.it/1rkhjau15hd81.jpg" alt="Xepa de Frutas" />
            <h3 className={style.titulo}>Xepa De Frutas</h3>
            <span className={style.local}>Local</span>
            <p className={style.descricao}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <button className={style.botaofrutas}>Ver mais detalhes</button>
          </div>

          <div className={style.cardsfrutas}>
            <img className={style.imagem} src="https://i.redd.it/1rkhjau15hd81.jpg" alt="Xepa de Frutas" />
            <h3 className={style.titulo}>Xepa De Frutas</h3>
            <span className={style.local}>Local</span>
            <p className={style.descricao}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <button className={style.botaofrutas}>Ver mais detalhes</button>
          </div>
        </div>

        <button
          className={style.setadireita}
          onClick={() => rolar(rolagemFrutas, 1)}
          aria-label="Avançar"
        >
          ›
        </button>
      </div>
    </div>
  );
}