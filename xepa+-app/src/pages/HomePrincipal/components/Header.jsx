
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

      <nav className="menu-principal">
        {links.map((link) => (
          <a key={link.texto} href={link.destino}>
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
