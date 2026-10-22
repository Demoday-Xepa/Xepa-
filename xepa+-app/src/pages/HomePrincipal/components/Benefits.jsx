
import '../css/Benefits.css'

import cestaXepa from '../imgs/Xepa.png'
import seta1 from '../imgs/Seta1.png'
import seta2 from '../imgs/Seta2.png'

const categorias = [
  {
    nome: 'Legumes',
    classe: 'categoria-beneficio--legumes',
    imagem: seta1,
  },
  {
    nome: 'Verduras',
    classe: 'categoria-beneficio--verduras',
    imagem: seta2,
  },
  {
    nome: 'Frutas',
    classe: 'categoria-beneficio--frutas',
    imagem: seta2,
  },
  {
    nome: 'Temperos',
    classe: 'categoria-beneficio--temperos',
    imagem: seta1,
  },
]

export default function Benefits() {
  return (
    <section className="secao-beneficios" id="beneficios">
      <header className="cabecalho-beneficios">
        <h2>O que você vai receber</h2>

        <p>
          Com o Xepa+, você encontra alimentos frescos, economiza
          nas compras e ajuda a reduzir o desperdício nas feiras.
        </p>

        <a href="#sobre" className="botao-beneficios">
          Saiba mais
        </a>
      </header>

      <div className="ilustracao-beneficios">
        <img
          className="cesta-beneficios"
          src={cestaXepa}
          alt="Cesta de alimentos do Xepa+"
        />

        {categorias.map((categoria) => (
          <div
            key={categoria.nome}
            className={`categoria-beneficio ${categoria.classe}`}
          >
            <span>{categoria.nome}</span>

            <img
              className="seta-beneficio"
              src={categoria.imagem}
              alt=""
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
