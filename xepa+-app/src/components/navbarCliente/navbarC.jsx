import React from 'react';
import styles from './navbarC.module.css'; 
import logo from '../../imgs/logo.png'; 

export function Navbar() {
  return (
    <header className={styles.navbar}>

      <div className={styles.logo}>
        <img src={logo} alt="Logo Xepa" className={styles.iconeLogo} />
      </div>

      <nav className={styles.navLinks}>
        <a href="#home" className={styles.linkAtivo}>Home</a>
        <a href="#mapa" className={styles.linkNav}>Mapa</a>
        <a href="#impacto" className={styles.linkNav}>Seu Impacto</a>
        <a href="#receita" className={styles.linkNav}>Receita</a>
        <a href="#carrinho" className={styles.linkNav}>Carrinho</a>
        <a href="#perfil" className={styles.linkNav}>Perfil</a>
        <a href="#ia" className={styles.linkNav}>IA</a>
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