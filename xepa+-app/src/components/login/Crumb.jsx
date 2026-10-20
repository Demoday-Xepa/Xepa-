import Styles from './Css/Crumb.module.css'

function Crumb() {
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
        <form className={Styles.form}>
          <h1>Entrar na conta</h1>
 
          <div className={Styles.tipoUsuario}>
            <button type="button" className={Styles.btnTipo}>
              Sou consumidor
            </button>
            <button type="button" className={Styles.btnTipo}>
              Sou feirante
            </button>
          </div>
 
          <label htmlFor="email">Digite seu Email</label>
          <input type="email" id="email" name="email" />
 
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" />
 
          <button type="submit" className={Styles.btnEntrar}>
            Entrar
          </button>
 
          <p className={Styles.cadastro}>
            Ainda não tem conta? <a href="#">Cadastre-se</a>
          </p>
        </form>
      </section>
    </main>
  )
}

export default Crumb