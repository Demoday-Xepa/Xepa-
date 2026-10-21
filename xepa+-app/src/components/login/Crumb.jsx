import Styles from './Css/Crumb.module.css'

function Crumb() {
  return (
    <main className={Styles.container}>
    
      <section className={Styles.ladoImagem}>

      </section>
 

      <section className={Styles.ladoForm}>
        <form className={Styles.form}>
          <h1>Entrar na conta</h1>
 
          <label htmlFor="email">Digite seu Email</label>
          <input type="email" id="email" name="email" />
 
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" />
 
          <button type="submit" className={Styles.btnEntrar}>
            Entrar
          </button>
 
          <button type="submit" className={Styles.btndemo}>
            Visite nosso Demo (Acesso rápido)
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