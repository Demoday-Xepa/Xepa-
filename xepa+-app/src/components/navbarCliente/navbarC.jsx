import { Link } from 'react-router-dom';
import styles from './navbarC.module.css'; 
import logo from '../../imgs/logo.png'; 

export function Navbar() {
  return (
    <header className={styles.navbar}>

      <div className={styles.logo}>
        <img src={logo} alt="Logo Xepa" className={styles.iconeLogo} />
      </div>

      <nav className={styles.navLinks}>
       <Link to='/HomePrincipal' className={styles.linkAtivo}>Home</Link>
        <Link to='/Mapa' className={styles.linkNav}>Mapa</Link>
        <Link to='/impactoU' className={styles.linkNav}>Seu Impacto</Link>
        <Link to='/cozinha' className={styles.linkNav}>Receita</Link>
        <Link to='/' className={styles.linkNav}>Carrinho</Link>
        <Link to='/' className={styles.linkNav}>Perfil</Link>
        <Link to='/ChatIA' className={styles.linkNav}>IA</Link>
    
      </nav>


    
      <div className={styles.acoes}>
        <div className={styles.perfil}>
          <div className={styles.avatar}></div>
          <span className={styles.nomeUsuario}>Henrique</span>
        </div>
        <button className={styles.botaoVoltar}>Voltar</button>
      </div>
    </header>
  );
}