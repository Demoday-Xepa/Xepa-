
import { NavLink, Link } from 'react-router-dom';
import styles from './navbarF.module.css';
import logo from '@/assets/imagens/gerais/logo-2.png';

const links = [
  { texto: 'Home', destino: '/homeF' },
  { texto: 'Produtos', destino: '/adicionar-produto' },
  { texto: 'Feiras', destino: '/adicionar-feira' },
  { texto: 'Financeiro', destino: '/financeiro' },
  { texto: 'Chat', destino: '/chat-feirante' },
  { texto: 'Xep.AI', destino: '/chat-ia' },
];

export function NavbarF() {
  return (
    <header className={styles.navbar}>
      <Link to="/homeF" className={styles.logo} aria-label="Home do feirante">
        <img src={logo} alt="Logo Xepa+" className={styles.iconeLogo} />
      </Link>

      <nav className={styles.navLinks} aria-label="Navegação do feirante">
        {links.map((link) => (
          <NavLink
            key={link.destino}
            to={link.destino}
            end
            className={({ isActive }) =>
              isActive ? styles.linkAtivo : styles.linkNav
            }
          >
            {link.texto}
          </NavLink>
        ))}
      </nav>

      <div className={styles.acoes}>
        <Link to="/perfil-feirante" className={styles.perfil}>
          <div className={styles.avatar}></div>
          <span className={styles.nomeUsuario}>Fabiane</span>
        </Link>

        <Link to="/" className={styles.botaoVoltar}>
          Sair
        </Link>
      </div>
    </header>
  );
}

export default NavbarF;
