
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import styles from './navbarC.module.css';
import logo from '@/assets/imagens/gerais/logo-2.png';

const links = [
  { texto: 'Home', destino: '/homeU' },
  { texto: 'Mapa', destino: '/mapa' },
  { texto: 'Seu Impacto', destino: '/impacto' },
  { texto: 'Receita', destino: '/cozinha' },
  { texto: 'Chat', destino: '/HistoricoChat' },
];

function NavbarC() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className={styles.navbar}>
      <Link
        to="/homeU"
        className={styles.logo}
        aria-label="Home do usuário"
        onClick={fecharMenu}
      >
        <img src={logo} alt="Logo Xepa+" className={styles.iconeLogo} />
      </Link>

      <nav className={styles.navLinks} aria-label="Navegação do usuário"> 
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
          to="/perfil"
          className={`${styles.perfil} ${styles.perfilMenu}`}
          onClick={fecharMenu}
        >
          <div className={styles.avatar}></div>
          <span className={styles.nomeUsuario}>Usuário</span>
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
        <NavLink
          to="/carrinho"
          end
          aria-label="Carrinho"
          title="Carrinho"
          className={({ isActive }) =>
            `${styles.linkCarrinho} ${isActive ? styles.carrinhoAtivo : ''}`
          }
        >
          <ShoppingCart size={30} strokeWidth={2} />
        </NavLink>

        <Link to="/perfil" className={styles.perfil}>
          <div className={styles.avatar}></div>
          <span className={styles.nomeUsuario}>Usuário</span>
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

export default NavbarC;
