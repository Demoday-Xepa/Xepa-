import { useMemo, useState } from "react";
import { Pencil } from "lucide-react";
import Styles from "../estilos/resumoGasto.module.css";

const MS_POR_DIA = 24 * 60 * 60 * 1000;

const periodos = [
  { id: "diario", rotulo: "Diário" },
  { id: "semanal", rotulo: "Semanal" },
  { id: "mensal", rotulo: "Mensal" },
];

const SEM_FILTROS = { categoria: "", ordemQuantidade: "", ordemPreco: "" };

// Quantos dias se passaram desde a data do gasto (0 = hoje)
function diasDesde(data) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const dia = new Date(data);
  dia.setHours(0, 0, 0, 0);
  return Math.round((hoje - dia) / MS_POR_DIA);
}

const filtrosPorPeriodo = {
  diario: (data) => diasDesde(data) === 0,
  semanal: (data) => diasDesde(data) >= 0 && diasDesde(data) < 7,
  mensal: (data) => {
    const gasto = new Date(data);
    const hoje = new Date();
    return gasto.getMonth() === hoje.getMonth() && gasto.getFullYear() === hoje.getFullYear();
  },
};

// Ordena por quantidade primeiro e, em caso de empate, por preço unitário
function compararGastos(filtros) {
  const sentido = (ordem) => (ordem === "maior" ? -1 : 1);
  return (a, b) => {
    if (filtros.ordemQuantidade && a.quantidade !== b.quantidade) {
      return (a.quantidade - b.quantidade) * sentido(filtros.ordemQuantidade);
    }
    if (filtros.ordemPreco && a.valorUnitario !== b.valorUnitario) {
      return (a.valorUnitario - b.valorUnitario) * sentido(filtros.ordemPreco);
    }
    return 0;
  };
}

const formatarMoeda = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Ícone de filtro do campo de busca (três linhas alinhadas à direita)
function IconeFiltro({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2 2h20M9 8h13M16 14h6" />
    </svg>
  );
}

function HistoricoGastos({ gastos = [], filtros = SEM_FILTROS, onEditar, onFiltrar }) {
  const [periodo, setPeriodo] = useState("diario");
  const [busca, setBusca] = useState("");

  const gastosFiltrados = useMemo(() => {
    const termo = busca.trim().toLocaleLowerCase("pt-BR");
    return gastos
      .filter(
        (gasto) =>
          filtrosPorPeriodo[periodo](gasto.data) &&
          gasto.descricao.toLocaleLowerCase("pt-BR").includes(termo) &&
          (!filtros.categoria || gasto.categoria === filtros.categoria),
      )
      .sort(compararGastos(filtros));
  }, [gastos, periodo, busca, filtros]);

  const temFiltroAtivo = Boolean(busca.trim() || filtros.categoria);

  return (
    <section className={Styles.containerHistorico} aria-label="Histórico de gastos">
      <form className={Styles.busca} role="search" onSubmit={(event) => event.preventDefault()}>
        <div className={Styles.grupoBusca}>
          <button type="submit" className={Styles.botaoBusca}>Busca</button>
          <label className={Styles.campoBusca}>
            <span className={Styles.visualmenteOculto}>Buscar gasto</span>
            <input
              type="search"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              placeholder="Buscar gasto"
            />
            <IconeFiltro className={Styles.iconeFiltro} />
          </label>
        </div>

        <button type="button" className={Styles.botaoFiltrar} onClick={() => onFiltrar?.()}>
          Filtrar
        </button>
      </form>

      <div className={Styles.filtros}>
        {periodos.map(({ id, rotulo }) => (
          <button
            key={id}
            type="button"
            aria-pressed={periodo === id}
            className={periodo === id ? Styles.filtroAtivo : Styles.filtro}
            onClick={() => setPeriodo(id)}
          >
            {rotulo}
          </button>
        ))}
      </div>

      <div className={Styles.lista}>
        {gastosFiltrados.map((gasto) => (
          <article className={Styles.cartaoGasto} key={gasto.id}>
            <div className={`${Styles.dado} ${Styles.dadoDescricao}`}>
              <h3>Com oque?</h3>
              <p>{gasto.descricao}</p>
            </div>
            <div className={Styles.dado}>
              <h3>Quantidade</h3>
              <p>{gasto.quantidade}</p>
            </div>
            <div className={Styles.dado}>
              <h3>Valor Unitário</h3>
              <p>{formatarMoeda(gasto.valorUnitario)}</p>
            </div>
            <div className={Styles.dado}>
              <h3>Valor total</h3>
              <p>{formatarMoeda(gasto.quantidade * gasto.valorUnitario)}</p>
            </div>

            <button
              type="button"
              className={Styles.botaoEditar}
              aria-label={`Editar ${gasto.descricao}`}
              onClick={() => onEditar?.(gasto)}
            >
              <Pencil size={18} aria-hidden="true" />
            </button>
          </article>
        ))}

        {gastosFiltrados.length === 0 && (
          <p className={Styles.semResultados}>
            {temFiltroAtivo ? "Nenhum gasto encontrado com esses filtros." : "Nenhum gasto neste período."}
          </p>
        )}
      </div>
    </section>
  );
}

export default HistoricoGastos;
