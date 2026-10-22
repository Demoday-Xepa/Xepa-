import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbarF.module.css";
import logo from "../../imgs/logo.png";

export function NavbarF() {
  return (
    <header className={styles.navbar}>

      <div className={styles.logo}>
        <img src={logo} alt="Logo Xepa+" className={styles.iconeLogo} />
      </div>

      <nav className={styles.navLinks}>

        <Link to="/homeF" className={styles.linkAtivo}>
          Home
        </Link>

        <Link to="/adicionar-produto" className={styles.linkNav}>
          Produtos
        </Link>

        <Link to="/adicionar-feira" className={styles.linkNav}>
          Feiras
        </Link>

        <Link to="/financeiro" className={styles.linkNav}>
          Financeiro
        </Link>

        <Link to="/chat-feirante" className={styles.linkNav}>
          Chat
        </Link>

        <Link to="/chat-ia" className={styles.linkNav}>
          Xep.AI
        </Link>

      </nav>

      <div className={styles.acoes}>

        <div className={styles.perfil}>
          <div className={styles.avatar}></div>
          <span className={styles.nomeUsuario}>Fabiane</span>
        </div>

        <Link to="/" className={styles.botaoVoltar}>
          Sair
        </Link>

      </div>

    </header>
  );
}

export default NavbarF;
