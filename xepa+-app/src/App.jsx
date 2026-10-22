import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Páginas principais
import HomePrincipal from './pages/HomePrincipal/HomePrincipal'
import SobreNos from './pages/sobreNos/Sobrenos'
import HomeFeirante from './pages/HomeF/Home'
import HomeUsuario from './pages/homeU/Home'
import Financeiro from './pages/financeiro/financeiro'
import Mapa from './pages/Mapa/mapaMain'
import AddProduto from './pages/AddProduto/AddProduto'
import AddFeira from './pages/AddFeira/AddFeira'
import ChatFeirante from './pages/ChatF/chatF'
import ChatIA from './pages/ChatIA/chatIA'
import { Impacto } from './pages/impactoU/impactoU'
import Cozy from './pages/cozinha/Cozy'

// Login e cadastro
import Crumb from './components/login/Crumb'
import Demo from './components/demo/demo'
import OpcaoLogin from './components/login/OpcaoLogin'
import CriarUsuarioF from './components/login/CriarUsuarioF'
import CriarContaF from './components/login/CriarContaF'
import CriarConta from './components/login/CriarConta'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePrincipal />} />

        {/* Login e cadastro */}
        <Route path="/Crumb" element={<Crumb />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/demo/feirante" element={<HomeFeirante />} />
        <Route path="/demo/consumidor" element={<HomeUsuario />} />
        <Route path="/OpcaoLogin" element={<OpcaoLogin />} />
        <Route path="/CriarContaF" element={<CriarContaF />} />
            <Route path="/CriarUsuarioF" element={<CriarUsuarioF />} />
        <Route path="/CriarConta" element={<CriarConta />} />

        <Route path="/homeF" element={<HomeFeirante />} />
        <Route path="/homeU" element={<HomeUsuario />} />

        {/* Funcionalidades */}
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/sobrenos" element={<SobreNos />} />

        <Route path="/adicionar-produto" element={<AddProduto />} />
        <Route path="/adicionar-feira" element={<AddFeira />} />

        <Route path="/chat-feirante" element={<ChatFeirante />} />
        <Route path="/chat-ia" element={<ChatIA />} />
        <Route path="/impacto" element={<Impacto />} />
        <Route path="/cozinha" element={<Cozy />} />

        {/* Qualquer rota inexistente */}
        <Route path="*" element={<HomePrincipal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App