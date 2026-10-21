
import { useEffect, useRef, useState } from 'react';
import '../css/HowItWorks.css';

import estrela1 from '../imgs/Estrela-1.png';
import estrela2 from '../imgs/Estrela-2.png';
import estrela3 from '../imgs/Estrela-3.png';
import mamao from '../imgs/Mamão-funciona.png';
import pessego from '../imgs/Pessego-funciona.png';

const etapas = [
  {
    numero: '1',
    imagem: estrela1,
    titulo: 'Crie sua conta',
    descricao:
      'Cadastre-se para encontrar alimentos e feiras perto de você.',
  },
  {
    numero: '2',
    imagem: estrela2,
    titulo: 'Veja a feira perto de você',
    descricao:
      'Encontre feirantes próximos e descubra os alimentos disponíveis.',
  },
  {
    numero: '3',
    imagem: estrela3,
    titulo: 'Compre e retire sua xepa',
    descricao:
      'Escolha seus produtos e retire sua compra na feira.',
  },
];

export default function HowItWorks() {
  const secaoRef = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const secao = secaoRef.current;

    if (!secao) return;

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(secao);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={secaoRef}
      className={`secao-funcionamento${
        visivel ? ' secao-funcionamento--visivel' : ''
      }`}
      id="como-funciona"
    >
      <img
        className="fruta-funcionamento fruta-funcionamento--direita"
        src={mamao}
        alt=""
        aria-hidden="true"
      />

      <img
        className="fruta-funcionamento fruta-funcionamento--esquerda"
        src={pessego}
        alt=""
        aria-hidden="true"
      />

      <div className="conteudo-funcionamento">
        <h2>Mas como isso funciona?</h2>

        <div className="lista-etapas">
          {etapas.map((etapa) => (
            <article
              className="etapa-funcionamento"
              key={etapa.numero}
            >
              <div className="icone-etapa">
                <img src={etapa.imagem} alt="" />
                <span>{etapa.numero}</span>
              </div>

              <div className="texto-etapa">
                <h3>{etapa.titulo}</h3>
                <p>{etapa.descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
