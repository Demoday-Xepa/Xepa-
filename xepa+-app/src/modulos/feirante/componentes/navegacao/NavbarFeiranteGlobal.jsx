
import { useLocation } from 'react-router-dom';
import NavbarF from './navbarF';

function NavbarFeiranteGlobal() {
  const { pathname } = useLocation();

  const caminhosFeirante = [
    '/homeF',
    '/demo/feirante',
    '/adicionar-produto',
    '/adicionar-feira',
    '/financeiro',
  ];

  const mostrarNavbar = caminhosFeirante.includes(pathname);

  if (!mostrarNavbar) {
    return null;
  }

  return <NavbarF />;
}

export default NavbarFeiranteGlobal;
