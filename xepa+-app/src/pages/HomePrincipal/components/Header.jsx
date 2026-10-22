
import '../css/Header.css';

const links = [
  { texto: 'Home', destino: '#inicio' },
  { texto: 'Sobre Nós', destino: '#sobre' },
  { texto: 'Mapa', destino: '#mapa' },
  { texto: 'Xepas', destino: '#xepas' },
  { texto: 'Receitas', destino: '#receitas' },
];

export default function Header() {
  return (
    <header className="cabecalho-xepa">
      <a href="#inicio" className="marca-xepa">
        <span className="icone-marca">✿</span>
        <span>
          Xepa<span className="marca-mais">+</span>
        </span>
      </a>

      <nav
        id="menu-principal"
        className={`menu-principal${aberto ? ' aberto' : ''}`}
        aria-label="Principal"
      >
        {links.map((link) => (
          <a key={link.texto} href={link.destino} onClick={() => setAberto(false)}>
            {link.texto}
          </a>
        ))}
      </nav>

      <a href="#login" className="botao-entrar">
        Login
      </a>
    </header>
  );
}
