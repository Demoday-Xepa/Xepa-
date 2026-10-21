import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import HomePrincipal from './pages/HomePrincipal/HomePrincipal'
import Header from './components/login/Header'
import Crumb from './components/login/Crumb'
import OpcaoLogin from './components/login/OpcaoLogin'
import CriarContaF from './components/login/CriarContaF'
import CriarConta from './components/login/CriarConta'
import CriarUsuarioF from './components/login/CriarUsuarioF'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePrincipal />} />
        <Route path="/Crumb" element={<Crumb />} />
        <Route path="/OpcaoLogin" element={<OpcaoLogin />} />
        <Route path="/CriarUsuarioF" element={<CriarUsuarioF />} />
        <Route path="/CriarContaF" element={<CriarContaF />} />
        <Route path="/CriarConta" element={<CriarConta />} />
      </Routes>
    </Router>
  )
}

export default App
