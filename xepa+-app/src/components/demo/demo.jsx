
import { useNavigate } from 'react-router-dom'
import Styles from './demo.module.css'

function Demo() {
  const navigate = useNavigate()

  return (
    <main className={Styles.container}>
      <section className={Styles.ladoImagem}>
        
      </section>

      <section className={Styles.ladoForm}>
        <div className={Styles.form}>
          <h1>Como deseja entrar?</h1>

          <button
            type="button"
            className={Styles.opcao}
            onClick={() => navigate('/demo/feirante')}
          >
            <span className={Styles.frente}>
              <span className={Styles.titulo}>Sou feirante</span>
            </span>

            <span className={Styles.verso}>
              <span className={Styles.tituloVerso}>
                Área do feirante
              </span>
              <span className={Styles.descricao}>
                Veja como cadastrar produtos e acompanhar suas vendas.
              </span>
            </span>
          </button>

          <button
            type="button"
            className={Styles.opcao}
            onClick={() => navigate('/demo/consumidor')}
          >
            <span className={Styles.frente}>
              <span className={Styles.titulo}>Sou consumidor</span>
            </span>

            <span className={Styles.verso}>
              <span className={Styles.tituloVerso}>
                Área do consumidor
              </span>
              <span className={Styles.descricao}>
                Explore as ofertas e conheça os produtos disponíveis.
              </span>
            </span>
          </button>
        </div>
      </section>
    </main>
  )
}

export default Demo
