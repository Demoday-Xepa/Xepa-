import logo from "../../../imgs/logo.png";

function Header({ styles }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Xepa+" className={styles.logoImg} />
      </div>

      <div className={styles.usuario}>
        <span className={styles.sino}>
          <svg
            width="12"
            height="12"
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
        </span>

        <span className={styles.avatar}></span>
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