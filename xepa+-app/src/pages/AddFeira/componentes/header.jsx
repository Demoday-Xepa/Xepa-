import styles from "../css/header.module.css";
import logo from "../../../imgs/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Xepa+" className={styles.logoImg} />
      </div>

      <div className={styles.usuario}>
        <button type="button" className={styles.sino} aria-label="Notificações">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.7 21a2 2 0 0 1-3.4 0" />
          </svg>
        </button>

        <div className={styles.avatar}>
          <img src={logo} alt="Foto do usuário" />
        </div>

        <span className={styles.nomeUsuario}>Henrique</span>

        <button
          type="button"
          onClick={() => window.history.back()}
          className={styles.botaoVoltar}
        >
          Voltar
        </button>
      </div>
    </header>
  );
}

export default Header;