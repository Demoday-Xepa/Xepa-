import React from 'react';
import styles from './navbarC.module.css'; 
import logo from '../../imgs/logo.png'; 
export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Xepa" className={styles.iconeLogo} />
      </div>

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
