
import { BrowserRouter, Routes } from 'react-router-dom';

import Dashboard from '@/modulos/feirante/paginas/inicio/componentes/HomeFeirante.jsx';

import { rotasPublicas } from './aplicacao/rotas/rotas-publicas';
import { rotasAutenticacao } from './aplicacao/rotas/rotas-autenticacao';
import { rotasFeirante } from './aplicacao/rotas/rotas-feirante';
import { rotasUsuario } from './aplicacao/rotas/rotas-usuario';

import Footer from './components/footer/footer';
import UserWay from './components/UserWay';
import NavbarFeiranteGlobal from './modulos/feirante/componentes/navegacao/NavbarFeiranteGlobal';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <UserWay />

        <NavbarFeiranteGlobal />

        <Routes>
          {rotasAutenticacao}
          {rotasFeirante}
          {rotasUsuario}
          {rotasPublicas}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
