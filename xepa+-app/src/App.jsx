import { BrowserRouter, Routes } from 'react-router-dom';
import { rotasPublicas } from './aplicacao/rotas/rotas-publicas';
import { rotasAutenticacao } from './aplicacao/rotas/rotas-autenticacao';
import { rotasFeirante } from './aplicacao/rotas/rotas-feirante';
import { rotasUsuario } from './aplicacao/rotas/rotas-usuario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {rotasAutenticacao}
        {rotasFeirante}
        {rotasUsuario}
        {rotasPublicas}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
