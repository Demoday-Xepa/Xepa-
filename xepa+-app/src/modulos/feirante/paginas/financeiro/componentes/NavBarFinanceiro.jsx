
import './estilos/NavBarFinanceiro.css';

function NavBarFinanceiro({ pagina, setPagina }) {
  const links = [
    { id: 'inicio',  texto: 'Início' },
    { id: 'lucros',  texto: 'Lucros' },
    { id: 'gastos',  texto: 'Gastos' }
  ];

  return (
    <nav className="nav-financeiro">
      <div className="nav-links">
        {links.map(link => (
          <button
            key={link.id}
            className={pagina === link.id ? 'ativo' : ''}
            onClick={() => setPagina(link.id)}
          >
            {link.texto}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBarFinanceiro;
