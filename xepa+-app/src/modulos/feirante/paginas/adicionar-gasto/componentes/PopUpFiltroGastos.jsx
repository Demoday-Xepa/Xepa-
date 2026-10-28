import { useEffect, useState } from "react";
import { ChevronsDown } from "lucide-react";
import styles from "../estilos/PopUpGasto.module.css";

const categorias = [
  { valor: "mercadoria", rotulo: "Mercadoria" },
  { valor: "ajudantes", rotulo: "Ajudantes/funcionários" },
  { valor: "outros", rotulo: "Outros gastos" },
];

const ordensQuantidade = [
  { valor: "maior", rotulo: "Maior quantidade" },
  { valor: "menor", rotulo: "Menor quantidade" },
];

const ordensPreco = [
  { valor: "maior", rotulo: "Maior preço" },
  { valor: "menor", rotulo: "Menor preço" },
];

const filtrosVazios = { categoria: "", ordemQuantidade: "", ordemPreco: "" };

function CampoSelect({ id, rotulo, valor, onChange, placeholder, opcoes }) {
  return (
    <div className={styles.campo}>
      <label htmlFor={id}>{rotulo}</label>
      <div className={styles.campoSelect}>
        <select id={id} value={valor} onChange={onChange} className={valor ? undefined : styles.vazio}>
          {/* Escolher esta opção de novo remove o filtro */}
          <option value="">{placeholder}</option>
          {opcoes.map((opcao) => (
            <option key={opcao.valor} value={opcao.valor}>{opcao.rotulo}</option>
          ))}
        </select>
        <ChevronsDown className={styles.iconeSelect} strokeWidth={2.5} aria-hidden="true" />
      </div>
    </div>
  );
}

function FormularioFiltro({ filtros, onFechar, onAplicar }) {
  const [rascunho, setRascunho] = useState(filtros);

  useEffect(() => {
    const aoApertar = (evento) => evento.key === "Escape" && onFechar();
    window.addEventListener("keydown", aoApertar);
    return () => window.removeEventListener("keydown", aoApertar);
  }, [onFechar]);

  const alterar = (campo) => (evento) =>
    setRascunho((atual) => ({ ...atual, [campo]: evento.target.value }));

  function aplicar(evento) {
    evento.preventDefault();
    onAplicar(rascunho);
  }

  return (
    <div className={styles.fundo} onClick={onFechar}>
      <div
        className={`${styles.modal} ${styles.modalFiltro}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tituloModalFiltro"
        onClick={(evento) => evento.stopPropagation()}
      >
        <div className={styles.topo}>
          <h2 id="tituloModalFiltro">Filtro dos gastos</h2>
        </div>

        <form className={styles.form} onSubmit={aplicar}>
          <h3 className={styles.subtitulo}>Ordenar por</h3>

          <CampoSelect
            id="filtroCategoria"
            rotulo="Categoria"
            valor={rascunho.categoria}
            onChange={alterar("categoria")}
            placeholder="Selecione a categoria"
            opcoes={categorias}
          />
          <CampoSelect
            id="filtroQuantidade"
            rotulo="Por quantidade"
            valor={rascunho.ordemQuantidade}
            onChange={alterar("ordemQuantidade")}
            placeholder="Selecione a ordem"
            opcoes={ordensQuantidade}
          />
          <CampoSelect
            id="filtroPreco"
            rotulo="Valor preço"
            valor={rascunho.ordemPreco}
            onChange={alterar("ordemPreco")}
            placeholder="Selecione a ordem"
            opcoes={ordensPreco}
          />

          <button
            type="button"
            className={`${styles.secundario} ${styles.espacado}`}
            onClick={() => onAplicar(filtrosVazios)}
          >
            Limpar filtros
          </button>
          <button type="submit" className={styles.principal}>
            Filtrar
          </button>
        </form>
      </div>
    </div>
  );
}

function PopUpFiltroGastos({ aberto, filtros, onFechar, onAplicar }) {
  if (!aberto) return null;

  return <FormularioFiltro filtros={filtros} onFechar={onFechar} onAplicar={onAplicar} />;
}

export default PopUpFiltroGastos;
