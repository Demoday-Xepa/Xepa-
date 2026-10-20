function Footer({ styles }) {
  const iconeProps = {
    width: 12,
    height: 12,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTopo}>
        <div className={styles.footerMarca}>
          <h3>♧ Xepa+</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam.
          </p>

          <div className={styles.redes}>
            <span>
              <svg {...iconeProps}>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </span>
            <span>
              <svg {...iconeProps}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
            <span>
              <svg {...iconeProps}>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </span>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.footerColuna}>
            <h4>Tecnologias e IA</h4>
            <p>Assistente virtual</p>
            <p>Contato e suporte</p>
          </div>

          <div className={styles.footerColuna}>
            <h4>Para vender</h4>
            <p>Seja um feirante parceiro</p>
            <p>Cadastrar minha banca</p>
          </div>

          <div className={styles.footerColuna}>
            <h4>Home page</h4>
            <p>Quem somos</p>
            <p>Como funciona</p>
            <p>O que você vai receber</p>
            <p>Planos</p>
            <p>Mapa das feiras</p>
          </div>
        </div>
      </div>

      <div className={styles.footerRodape}>
        <span>© 2026 Xepa+ Todos os direitos reservados.</span>
        <div className={styles.footerLegal}>
          <span>Termos de uso</span>
          <span>Diretrizes de Privacidade</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;