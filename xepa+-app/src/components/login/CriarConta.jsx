import Styles from './Css/CriarConta.module.css'

function CriarConta() { 
  function proximaEtapa(event) {
    event.preventDefault()}

  return (
    <main className={Styles.container}>

        
      <section className={Styles.ladoImagem}>

      </section>

      <section className={Styles.ladoForm}>
        <form className={Styles.form} onSubmit={proximaEtapa}>
          <h1>Crie sua conta</h1>

          <div className={Styles.campo}>
            <label htmlFor="nome">Nome completo</label>
            <input type="text" id="nome" name="nome" />
          </div>

          <div className={Styles.linha}>
            <div className={Styles.campo}>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" name="cpf" inputMode="numeric" />
            </div>
            <div className={Styles.campo}>
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" name="telefone" />
            </div>
          </div>

          <div className={Styles.campo}>
            <label htmlFor="nascimento">Data de Nascimento</label>
            <input type="date" id="nascimento" name="nascimento" />
          </div>

          <div className={Styles.campo}>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" />
          </div>

          <button type="submit" className={Styles.btnEntrar}>
            Próxima etapa
          </button>
        </form>
      </section>
    </main>
  )
}

export default CriarConta