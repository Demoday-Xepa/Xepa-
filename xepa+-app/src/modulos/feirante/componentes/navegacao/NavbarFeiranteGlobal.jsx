import { useLocation } from 'react-router-dom';
import NavbarF from './NavbarF';

function NavbarFeiranteGlobal() {
  const { pathname } = useLocation();

  const caminhosFeirante = [
    '/homeF',
    '/demo/feirante',
    '/adicionar-produto',
    '/adicionar-feira',
    '/financeiro',
    '/adicionar-gasto',
    '/HistoricoChat',
    '/chat-ia-feirante',
  ];

  if (!caminhosFeirante.includes(pathname)) {
    return null;
  }

  return <NavbarF />;
}

export default NavbarFeiranteGlobal;