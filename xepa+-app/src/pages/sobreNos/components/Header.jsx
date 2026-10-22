import "./Header.css";

const LINKS = [
  { rotulo: "Home", href: "/" },
  { rotulo: "Sobre Nós", href: "/sobre" },
  { rotulo: "Mapa", href: "/mapa" },
  { rotulo: "Xepas", href: "/xepas" },
  { rotulo: "Receitas", href: "/receitas" },
];

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src="/images/logo-xepa.svg" alt="Xepa+" />
      </a>
      <nav className="header__nav" aria-label="Principal">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>{l.rotulo}</a>
        ))}
        <a href="/login" className="header__login">Login</a>
      </nav>
    </header>
  );
}