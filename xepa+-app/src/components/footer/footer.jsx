
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '@/assets/imagens/gerais/logo-2.png';

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
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
    titulo: 'Tecnologias e IA',
    links: [
      { texto: 'Assistente virtual', destino: '/assistente' },
      { texto: 'Contato e suporte', destino: '/contato' },
    ],
  },
  {
    titulo: 'Para vender',
    links: [
      { texto: 'Seja um feirante parceiro', destino: '/cadastro-feirante' },
      { texto: 'Cadastrar minha banca', destino: '/cadastro-feirante' },
    ],
  },
  {
    titulo: 'Home page',
    links: [
      { texto: 'Quem somos', destino: '/sobre-nos' },
      { texto: 'Como funciona', destino: '/#como-funciona' },
      { texto: 'O que você vai receber', destino: '/#beneficios' },
      { texto: 'Planos', destino: '/#planos' },
      { texto: 'Mapa das feiras', destino: '/mapa' },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="topo">
        <div className="marca">
          <Link to="/" className="logo" aria-label="Xepa+, página inicial">
            <img src={logo} alt="Xepa+" className="logoImg" />
          </Link>

          <p>
            Conectando feirantes e consumidores para combater o desperdício
            de alimentos. Alimentos frescos, sustentabilidade e economia
            para a sua rotina.
          </p>

          <div className="redes">
            {redes.map((icone, i) => (
              <span key={i}>
                <svg {...svgProps}>{icone}</svg>
              </span>
            ))}
          </div>
        </div>

        <div className="links">
          {colunas.map(({ titulo, links }) => (
            <div className="coluna" key={titulo}>
              <h4>{titulo}</h4>

              {links.map((link) => (
                <Link
                  className="linkFooter"
                  to={link.destino}
                  key={link.texto}
                >
                  {link.texto}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="rodape">
        <span>© 2026 Xepa+ Todos os direitos reservados.</span>

        <div className="legal">
          <Link to="/termos-de-uso">Termos de uso</Link>
          <Link to="/privacidade">Diretrizes de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
