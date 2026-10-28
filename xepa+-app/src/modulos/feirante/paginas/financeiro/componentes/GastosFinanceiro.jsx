
import './estilos/GastosFinanceiro.css';

function GastosFinanceiro({
  moeda,
  itensGastos,
  listaPeriodo,
  busca,
  setBusca,
  periodo,
  setPeriodo,
  filtroAberto,
  setFiltroAberto,
  aoAbrirModal,
  removerLancamento
}) {
  const totalGastos = listaPeriodo.reduce(
    (soma, item) => soma + Number(item.valor),
    0
  );

  return (
    <>
      <section className="titulo-gastos">
        <div>
          <h1>Seus gastos em um só lugar.</h1>
          <p>
            Cadastre e gerencie o histórico de gastos para ter maior controle sobre sua receita.
          </p>
        </div>

        <button
          className="botao-adicionar-gasto"
          onClick={() => aoAbrirModal('compra')}
        >
          + Adicionar gasto
        </button>
      </section>

      <section className="indicadores-financeiros indicador-gasto">
        <article>
          <h2>Total do período</h2>
          <p>Valor acumulado dos gastos selecionados</p>
          <strong>{moeda(totalGastos)}</strong>
        </article>
      </section>

      <section className="busca-gastos">
        <div className="campo-busca-gastos">
          <label htmlFor="busca-gasto">Buscar gastos</label>
          <input
            id="busca-gasto"
            value={busca}
            onChange={evento => setBusca(evento.target.value)}
            placeholder="Buscar por descrição ou categoria"
          />
          <span aria-hidden="true">⌕</span>
        </div>

        <button
          className="botao-filtro-gastos"
          onClick={() => setFiltroAberto(!filtroAberto)}
        >
          {filtroAberto ? 'Ocultar filtro' : 'Filtrar'}
        </button>
      </section>

      {filtroAberto && (
        <div className="filtro-categoria">
          <label htmlFor="periodo-gasto">Período</label>
          <select
            id="periodo-gasto"
            value={periodo}
            onChange={evento => setPeriodo(evento.target.value)}
          >
            <option value="dia">Diário</option>
            <option value="semana">Semanal</option>
            <option value="mes">Mensal</option>
          </select>
        </div>
      )}

      <div className="abas-periodo">
        {[
          ['dia', 'Diário'],
          ['semana', 'Semanal'],
          ['mes', 'Mensal']
        ].map(([valor, texto]) => (
          <button
            key={valor}
            className={periodo === valor ? 'selecionado' : ''}
            onClick={() => setPeriodo(valor)}
          >
            {texto}
          </button>
        ))}
      </div>

      <section className="lista-gastos">
        <div className="titulo-lista">
          <div>
            <span className="sobretitulo">LANÇAMENTOS</span>
            <h2>Gastos do período</h2>
          </div>

          <strong>
            {itensGastos.length}{' '}
            {itensGastos.length === 1 ? 'registro' : 'registros'}
          </strong>
        </div>

        {itensGastos.map(item => (
          <article className="linha-gasto" key={item.id}>
            <div className="gasto-descricao">
              <i />
              <div>
                <small>Com o quê?</small>
                <strong>{item.descricao}</strong>
                <span>
                  {item.categoria || 'Outros gastos'}
                  {' · '}
                  {new Date(`${item.data}T12:00:00`).toLocaleDateString('pt-BR')}
                </span>
              </div>
            </div>

            <div className="informacao-gasto">
              <small>Quantidade</small>
              <strong>{item.quantidade}</strong>
            </div>

            <div className="informacao-gasto">
              <small>Valor unitário</small>
              <strong>{moeda(item.valorUnitario)}</strong>
            </div>

            <div className="informacao-gasto">
              <small>Valor total</small>
              <strong>{moeda(item.valor)}</strong>
            </div>

            <button
              className="botao-excluir"
              title="Excluir gasto"
              aria-label={`Excluir ${item.descricao}`}
              onClick={() => {
                if (window.confirm(`Deseja excluir "${item.descricao}"?`)) {
                  removerLancamento(item.id);
                }
              }}
            >
              ×
            </button>
          </article>
        ))}

        {itensGastos.length === 0 && (
          <p className="estado-vazio">
            Nenhum gasto encontrado nesse período.
          </p>
        )}
      </section>
    </>
  );
}

export default GastosFinanceiro;
