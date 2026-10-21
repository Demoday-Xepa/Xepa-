import Styles from './Css/CriarContaF.module.css'

function CriarContaFeirante() {

  return (
    <main className={Styles.container}>

      <section className={Styles.ladoImagem}>
        <div className={Styles.logo}>Logo</div>

        <div className={Styles.textoImagem}>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod
          </h2>
        </div>
      </section>

      <section className={Styles.ladoForm}>
        <form className={Styles.form} onSubmit={proximaEtapa}>
          <h1>Crie sua conta</h1>

          <div className={Styles.linha}>
            <div className={Styles.campo}>
              <label htmlFor="matricula">Matrícula</label>
              <input type="text" id="matricula" name="matricula" />
            </div>
            <div className={Styles.campo}>
              <label htmlFor="validade">Validade</label>
              <input type="text" id="validade" name="validade" />
            </div>
          </div>

          <div className={Styles.linha}>
            <div className={Styles.campo}>
              <label htmlFor="cnpj">CNPJ</label>
              <input type="text" id="cnpj" name="cnpj" inputMode="numeric" />
            </div>
            <div className={Styles.campo}>
              <label htmlFor="ccm">CCM</label>
              <input type="text" id="ccm" name="ccm" />
            </div>
          </div>

          <div className={Styles.campo}>
            <label htmlFor="titular">Titular</label>
            <input type="text" id="titular" name="titular" />
          </div>

          <div className={Styles.campo}>
            <label htmlFor="nomeFantasia">Nome Fantasia</label>
            <input type="text" id="nomeFantasia" name="nomeFantasia" />
          </div>

          <div className={Styles.campo}>
            <label htmlFor="grupo">Grupo de Comércio</label>
            <input type="text" id="grupo" name="grupo" />
          </div>

          <button type="submit" className={Styles.btnEntrar}>
            Próxima etapa
          </button>

          <p className={Styles.cadastro}>
            Ainda não tem conta? <a href="#">Cadastre-se</a>
          </p>
        </form>
      </section>
    </main>
  )
}

export default CriarContaFeirante