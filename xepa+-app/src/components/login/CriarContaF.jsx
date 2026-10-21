import {Link} from 'react-router-dom'
import Styles from './Css/CriarContaF.module.css'

function CriarConta() { 
  function proximaEtapa(event) {
    event.preventDefault()}

  return (
    <main className={Styles.container}>

        
      <section className={Styles.ladoImagem}>

      </section>

      <section className={Styles.ladoForm}>
          <form
            className={Styles.form}
            onSubmit={proximaEtapa}
          >
            <h1>Crie sua conta</h1>

            <div className={Styles.linha}>
              <div className={Styles.campo}>
                <label htmlFor="matricula">
                  Matricula
                </label>

                <input
                  type="text"
                  id="matricula"
                  name="matricula"
                  required
                />
              </div>

              <div className={Styles.campo}>
                <label htmlFor="validade">
                  Validade
                </label>

                <input
                  type="text"
                  id="validade"
                  name="validade"
                  required
                />
              </div>
            </div>

            <div className={Styles.linha}>
              <div className={Styles.campo}>
                <label htmlFor="cnpj">CNPJ</label>

                <input
                  type="text"
                  id="cnpj"
                  name="cnpj"
                  inputMode="numeric"
                  required
                />
              </div>

              <div className={Styles.campo}>
                <label htmlFor="ccm">CCM</label>

                <input
                  type="text"
                  id="ccm"
                  name="ccm"
                  required
                />
              </div>
            </div>

            <div className={Styles.campo}>
              <label htmlFor="titular">
                Titular
              </label>

              <input
                type="text"
                id="titular"
                name="titular"
                required
              />
            </div>

            <div className={Styles.campo}>
              <label htmlFor="fantasia">
                Nome Fantasia
              </label>

              <input
                type="text"
                id="fantasia"
                name="fantasia"
                required
              />
            </div>

            <div className={Styles.campo}>
              <label htmlFor="grupo">
                Grupo de Comércio
              </label>

              <input
                type="text"
                id="grupo"
                name="grupo"
                required
              />
            </div>

            <button
              type="submit"
              className={Styles.btnEntrar}
            >
              Próxima etapa
            </button>
      
          </form>
        </section>
    </main>
  )
}

export default CriarConta