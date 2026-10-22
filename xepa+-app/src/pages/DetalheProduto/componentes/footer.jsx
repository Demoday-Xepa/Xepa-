
import styles from "../css/Footer.module.css";
import logo from "../../../imgs/logo.png";

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const redes = [
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </>,
  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />,
];

const colunas = [
  {
    titulo: "Tecnologias e IA",
    links: ["Assistente virtual", "Contato e suporte"],
  },
  {
    titulo: "Para vender",
    links: ["Seja um feirante parceiro", "Cadastrar minha banca"],
  },
  {
    titulo: "Home page",
    links: [
      "Quem somos",
      "Como funciona",
      "O que você vai receber",
      "Planos",
      "Mapa das feiras",
    ],
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topo}>
        <div className={styles.marca}>
          <div className={styles.logo}>
            <img src={logo} alt="Xepa+" className={styles.logoImg} />
          </div>

          <p>
            Conectando feirantes e consumidores para combater o desperdício de
            alimentos. Alimentos frescos, sustentabilidade e economia para a
            sua rotina.
          </p>

          <div className={styles.redes}>
            {redes.map((icone, i) => (
              <span key={i}>
                <svg {...svgProps}>{icone}</svg>
              </span>
            ))}
          </div>
        </div>

        <div className={styles.links}>
          {colunas.map(({ titulo, links }) => (
            <div className={styles.coluna} key={titulo}>
              <h4>{titulo}</h4>

              {links.map((link) => (
                <p key={link}>{link}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rodape}>
        <span>© 2026 Xepa+ Todos os direitos reservados.</span>

        <div className={styles.legal}>
          <span>Termos de uso</span>
          <span>Diretrizes de Privacidade</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
