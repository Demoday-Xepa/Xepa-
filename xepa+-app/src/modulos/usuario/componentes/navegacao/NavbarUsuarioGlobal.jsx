
import { useLocation } from 'react-router-dom';
import NavbarC from './NavbarC';

function NavbarUsuarioGlobal() {
  const { pathname } = useLocation();

  const caminhosUsuario = [
    '/homeU',
    '/demo/consumidor',
    '/mapa',
    '/impacto',
    '/cozinha',
    '/carrinho',
    '/perfil',
    '/chat-consumidor',
    '/chat-ia',
  ];

  if (!caminhosUsuario.includes(pathname)) {
    return null;
  }

  return <NavbarC />;
}

export default NavbarUsuarioGlobal;
