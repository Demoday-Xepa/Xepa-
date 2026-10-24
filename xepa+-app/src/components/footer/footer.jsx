
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '@/assets/imagens/gerais/logo-2.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerConteudo">
        <div className="footerMarca">
          <Link to="/" aria-label="Xepa+, página inicial">
            <img src={logo} alt="Xepa+" className="footerLogo" />
          </Link>
          <p>
            Conectando feirantes e consumidores para combater o desperdício
            de alimentos. Alimentos frescos, sustentabilidade e economia
            para a sua rotina.
          </p>
        </div>

        <div className="footerRedes">
          <h3>Redes sociais</h3>
          <a
            href="https://www.instagram.com/xepa_mais/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Xepa+"
          >
            <svg
              className="iconeInstagram"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="0.8" fill="currentColor" stroke="none" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="footerRodape">
        <span>© 2026 Xepa+ Todos os direitos reservados.</span>
        <Link to="/">Página inicial</Link>
      </div>
    </footer>
  );
}

export default Footer;
