
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import styles from './navbarC.module.css';
import logo from '@/assets/imagens/gerais/logo-2.png';

const links = [
  { texto: 'Home', destino: '/homeU' },
  { texto: 'Mapa', destino: '/mapa' },
  { texto: 'Seu Impacto', destino: '/impacto' },
  { texto: 'Receita', destino: '/cozinha' },
  { texto: 'Chat', destino: '/chat-consumidor' },
  { texto: 'Xep.IA', destino: '/chat-ia' },
];

function NavbarC() {
  return (
    <header className={styles.navbar}>
      <Link to="/homeU" className={styles.logo} aria-label="Home do usuário">
        <img src={logo} alt="Logo Xepa+" className={styles.iconeLogo} />
      </Link>

      <nav className={styles.navLinks} aria-label="Navegação do usuário"> 
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
      </div>
    </header>
  );
}

export default NavbarC;
