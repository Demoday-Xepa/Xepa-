
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './navbarF.module.css';
import logo from '@/assets/imagens/gerais/logo-2.png';

const links = [
  { texto: 'Home', destino: '/homeF' },
  { texto: 'Produtos', destino: '/adicionar-produto' },
  { texto: 'Feiras', destino: '/adicionar-feira' },
  { texto: 'Lucros', destino: '/financeiro' },
  { texto: 'Gastos', destino: '/adicionar-gasto' },
  { texto: 'Chat', destino: '/HistoricoChat' },
  { texto: 'Xep.AI', destino: '/chat-ia' },
];

export function NavbarF() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className={styles.navbar}>
      <Link
        to="/homeF"
        className={styles.logo}
        aria-label="Home do feirante"
        onClick={fecharMenu}
      >
        <img src={logo} alt="Logo Xepa+" className={styles.iconeLogo} />
      </Link>

      <nav
        className={`${styles.navLinks} ${menuAberto ? styles.menuAberto : ''}`}
        aria-label="Navegação do feirante"
      >
        {links.map((link) => (
          <NavLink
            key={link.destino}
            to={link.destino}
            end
            onClick={fecharMenu}
            className={({ isActive }) =>
              isActive ? styles.linkAtivo : styles.linkNav
            }
          >
            {link.texto}
          </NavLink>
        ))}

        <Link
          to="/perfil-feirante"
          className={`${styles.perfil} ${styles.perfilMenu}`}
          onClick={fecharMenu}
        >
          <div className={styles.avatar}></div>
          <span className={styles.nomeUsuario}>Fabiane</span>
        </Link>

        <Link
          to="/"
          className={`${styles.botaoVoltar} ${styles.sairMenu}`}
          onClick={fecharMenu}
        >
          Sair
        </Link>
      </nav>

      <div className={styles.acoes}>
        <Link to="/perfil-feirante" className={styles.perfil}>
          <div className={styles.avatar}></div>
          <span className={styles.nomeUsuario}>Fabiane</span>
        </Link>

        <Link to="/" className={styles.botaoVoltar}>
          Sair
        </Link>

        <button
          type="button"
          className={styles.botaoMenu}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default NavbarF;
