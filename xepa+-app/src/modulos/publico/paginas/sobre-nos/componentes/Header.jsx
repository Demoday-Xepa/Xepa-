
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/modulos/publico/paginas/inicio/estilos/Header.css'
import logo from '@/assets/imagens/pagina-inicial/logo-copy.png'

const links = [
  { texto: 'Home', rota: '/' },
  { texto: 'Sobre Nós', rota: '/sobre-nos' },
  { texto: 'Mapa', rota: '/mapa' },
  { texto: 'Receitas', rota: '/cozinha' },
]

export default function Header() {
  const navigate = useNavigate()
  const [aberto, setAberto] = useState(false)

  return (
    <header className="cabecalho-xepa">
      <a
        href="/"
        className="marca-xepa"
        aria-label="Xepa+, ir para o início"
        onClick={(e) => {
          e.preventDefault()
          navigate('/')
          setAberto(false)
        }}
      >
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
            href={link.rota}
            onClick={(e) => {
              e.preventDefault()
              navigate(link.rota)
              setAberto(false)
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
