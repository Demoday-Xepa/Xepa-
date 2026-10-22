
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import HomePrincipal from './pages/HomePrincipal/HomePrincipal'
import HomeFeirante from './pages/HomeF/Home'
import HomeUsuario from './pages/homeU/Home'

import HeaderLogin from './components/login/Header'
import Crumb from './components/login/Crumb'

import Financeiro from './pages/financeiro/financeiro'
import Mapa from './pages/Mapa/mapaMain'
import AddProduto from './pages/AddProduto/AddProduto'
import AddFeira from './pages/AddFeira/AddFeira'
import ChatFeirante from './pages/ChatF/chatF'
import ChatIA from './pages/ChatIA/chatIA'
import { Impacto } from './pages/impactoU/impactoU'
import Cozy from './pages/cozinha/Cozy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePrincipal />} />

        <Route
          path="/login"
          element={
            <>
              <HeaderLogin />
              <Crumb />
            </>
          }
        />

        <Route path="/homeF" element={<HomeFeirante />} />
        <Route path="/homeU" element={<HomeUsuario />} />

        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/mapa" element={<Mapa />} />

        <Route
          path="/adicionar-produto"
          element={<AddProduto />}
        />

        <Route
          path="/adicionar-feira"
          element={<AddFeira />}
        />

        <Route
          path="/chat-feirante"
          element={<ChatFeirante />}
        />

        <Route path="/chat-ia" element={<ChatIA />} />

        <Route path="/impacto" element={<Impacto />} />
        <Route path="/cozinha" element={<Cozy />} />

        <Route path="*" element={<HomePrincipal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
