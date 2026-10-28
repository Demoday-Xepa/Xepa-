
import './estilos/LucrosFinanceiro.css';

function LucrosFinanceiro({
  moeda,
  total,
  hoje,
  entradasMes,
  gastosMes,
  saldoMes,
  lancamentosMes,
  aoAbrirModal,
  aoVerGastos
}) {
  const semanas = [0, 1, 2, 3, 4].map(numero => {
    const itens = lancamentosMes.filter(item => {
      const dia = Number(item.data.slice(-2));
      return Math.floor((dia - 1) / 7) === numero;
    });

    return {
      nome: `Semana ${numero + 1}`,
      valor: total(itens, 'renda') - total(itens, 'compra')
    };
  });

  const maiorLucro = Math.max(
    1,
    ...semanas.map(item => Math.max(0, item.valor))
  );

  const margem = entradasMes > 0
    ? (saldoMes / entradasMes * 100).toFixed(1)
    : '0.0';

  return (
    <>
      <section className="titulo-financeiro titulo-pagina">
        <div>
          <h1><strong>Seus lucros</strong></h1>
          <p>
            Entenda quanto a feira gerou depois de todos os gastos cadastrados.
          </p>
        </div>

        <button onClick={() => aoAbrirModal('renda')}>
          + Adicionar renda
        </button>
      </section>

      <section className="lucro-principal">
        <div>
          <span>Saldo após despesas</span>
          <strong>{moeda(saldoMes)}</strong>
          <small>Receitas menos despesas cadastradas</small>
        </div>

        <div className="margem-circulo">
          <strong>{margem}%</strong>
          <span>margem</span>
        </div>
      </section>

      <section className="indicadores-financeiros tres-cartoes">
        <article>
          <p>Receita bruta</p>
          <strong>{moeda(entradasMes)}</strong>
          <small>Total de entradas no mês</small>
        </article>

        <article>
          <p>Custos</p>
          <strong>{moeda(gastosMes)}</strong>
          <small>
            {lancamentosMes.filter(item => item.tipo === 'compra').length}
            {' '}lançamentos
          </small>
        </article>

        <article>
          <p>Média semanal</p>
          <strong>{moeda(saldoMes / Math.max(1, Math.ceil(hoje.getDate() / 7)))}</strong>
          <small>Saldo médio por semana transcorrida</small>
        </article>
      </section>

      <section className="painel-financeiro painel-lucros">
        <div className="cartao-financeiro">
          <div className="cabecalho-cartao">
            <div>
              <span className="sobretitulo">EVOLUÇÃO</span>
              <h2>Resultado por semana</h2>
            </div>

            <span>
              {hoje.toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>

          <div className="barras-lucro">
            {semanas.map((item, indice) => (
              <div className="barra-semana" key={item.nome}>
                <strong>{moeda(item.valor)}</strong>

                <div>
                  <span
                    className={indice === 3 ? 'barra-destaque' : ''}
                    style={{
                      height: `${Math.max(
                        3,
                        Math.max(0, item.valor) / maiorLucro * 100
                      )}%`
                    }}
                  />
                </div>

                <small>{item.nome}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="cartao-financeiro composicao">
          <span className="sobretitulo">COMPOSIÇÃO</span>
          <h2>Receitas e despesas</h2>

          <div className="barra-composicao">
            <span
              style={{
                width: `${entradasMes > 0
                  ? Math.min(100, gastosMes / entradasMes * 100)
                  : 0}%`
              }}
            />
          </div>

          <p>
            <i className="ponto-verde" />
            Saldo após despesas
            <strong>{moeda(saldoMes)}</strong>
          </p>

          <p>
            <i className="ponto-limao" />
            Custos e compras
            <strong>{moeda(gastosMes)}</strong>
          </p>

          <button
            className="botao-largo botao-secundario"
            onClick={aoVerGastos}
          >
            Ver todos os gastos
          </button>
        </div>
      </section>

      <section className="cartao-financeiro historico-lucros">
        <div className="cabecalho-cartao">
          <div>
            <span className="sobretitulo">HISTÓRICO</span>
            <h2>Últimas movimentações</h2>
          </div>

          <button className="botao-secundario" onClick={aoVerGastos}>
            Ver gastos
          </button>
        </div>

        {lancamentosMes.slice(0, 5).map(item => (
          <div className="linha-historico" key={item.id}>
            <div>
              <strong>{item.descricao}</strong>
              <small>
                {item.tipo === 'renda' ? 'Entrada' : 'Gasto'}
                {' · '}
                {new Date(`${item.data}T12:00:00`).toLocaleDateString('pt-BR')}
              </small>
            </div>

            <strong className={item.tipo === 'renda' ? 'valor-positivo' : 'valor-negativo'}>
              {item.tipo === 'compra' ? '- ' : '+ '}
              {moeda(item.valor)}
            </strong>
          </div>
        ))}

        {lancamentosMes.length === 0 && (
          <p className="estado-vazio">
            Nenhuma movimentação registrada neste mês.
          </p>
        )}
      </section>
    </>
  );
}

export default LucrosFinanceiro;
