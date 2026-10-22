import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Header.css'
import logo from '../imgs/logo copy.png'

const links = [
  { texto: 'Home', destino: '#inicio' },
  { texto: 'Sobre Nós', destino: '#sobre' },
  { texto: 'Mapa', rota: '/mapa' },
  { texto: 'Finanças', rota: '/financeiro' },
  { texto: 'Receitas', destino: '/cozinha' },
]

export default function Header() {
  const navigate = useNavigate()
  const [aberto, setAberto] = useState(false)

  return (
    <header className="cabecalho-xepa">
      <a href="#inicio" className="marca-xepa" aria-label="Xepa+, ir para o início">
        <img className="logo-xepa" src={logo} alt="Xepa+" />
      </a>

      <nav
        id="menu-principal"
        className={`menu-principal${aberto ? ' aberto' : ''}`}
        aria-label="Principal"
      >
        {links.map((link) => (
          <a
            key={link.texto}
            href={link.rota || link.destino}
            onClick={(e) => {
              setAberto(false)
              if (link.rota) {
                e.preventDefault()
                navigate(link.rota)
              }
            }}
          >
            {link.texto}
          </a>
        ))}
      </nav>

      <div className="acoes-xepa">
        <button
          type="button"
          className="botao-entrar"
          onClick={() => navigate('/Crumb')}
        >
          Login
        </button>

        <button
          type="button"
          className="botao-menu"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAberto(!aberto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}