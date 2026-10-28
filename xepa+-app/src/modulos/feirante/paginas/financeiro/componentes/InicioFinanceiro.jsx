
import './estilos/InicioFinanceiro.css';

function InicioFinanceiro({
  moeda,
  total,
  hoje,
  entradasMes,
  gastosMes,
  saldoMes,
  lancamentosMes,
  lancamentosSemana,
  aoAbrirModal,
  aoVerGastos
}) {
  const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  const valoresDias = dias.map((dia, indice) => {
    const data = new Date(hoje);
    data.setHours(12, 0, 0, 0);
    data.setDate(hoje.getDate() - ((hoje.getDay() + 6) % 7) + indice);

    const dataTexto = [
      data.getFullYear(),
      String(data.getMonth() + 1).padStart(2, '0'),
      String(data.getDate()).padStart(2, '0')
    ].join('-');

    return {
      dia,
      valor: total(
        lancamentosSemana.filter(item => item.data === dataTexto),
        'renda'
      )
    };
  });

  const maiorValor = Math.max(1, ...valoresDias.map(item => item.valor));

  const comprasRecentes = lancamentosMes
    .filter(item => item.tipo === 'compra')
    .slice(0, 3);

  return (
    <>
      <section className="titulo-financeiro">
        <div>
          <h1>Seu financeiro em um só lugar.</h1>
          <p>
            Acompanhe o desempenho da feira e tome decisões com segurança.
          </p>
        </div>

        <div className="botoes-financeiro">
          <button
            className="botao-secundario"
            onClick={() => aoAbrirModal('compra')}
          >
            + Novo gasto
          </button>

          <button onClick={() => aoAbrirModal('renda')}>
            + Adicionar renda
          </button>
        </div>
      </section>

      <section className="indicadores-financeiros">
        <article>
          <h2>Entradas do mês</h2>
          <p>Receitas registradas</p>
          <strong>{moeda(entradasMes)}</strong>
        </article>

        <article>
          <h2>Saídas do mês</h2>
          <p>
            {lancamentosMes.filter(item => item.tipo === 'compra').length}
            {' '}gastos cadastrados
          </p>
          <strong>{moeda(gastosMes)}</strong>
        </article>

        <article className="indicador-destaque">
          <h2>Saldo disponível</h2>
          <p>Entradas menos saídas</p>
          <strong>{moeda(saldoMes)}</strong>
        </article>
      </section>

      <section className="painel-financeiro">
        <div className="cartao-financeiro">
          <div className="cabecalho-cartao">
            <div>
              <span className="sobretitulo">DESEMPENHO</span>
              <h2>Movimento da semana</h2>
            </div>
            <span>Atualizado agora</span>
          </div>

          <div className="grafico-semanal">
            {valoresDias.map(item => (
              <div className="grafico-dia" key={item.dia}>
                <small>{item.dia}</small>

                <div className="grafico-coluna">
                  <span
                    style={{
                      height: `${Math.max(3, item.valor / maiorValor * 100)}%`
                    }}
                  />
                </div>

                <strong>{moeda(item.valor)}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="cartao-financeiro resumo-semanal">
          <span className="sobretitulo">RESUMO</span>
          <h2>Este mês</h2>

          <div>
            <span>Receita bruta</span>
            <strong>{moeda(entradasMes)}</strong>
          </div>

          <div>
            <span>Custo dos produtos</span>
            <strong>{moeda(gastosMes)}</strong>
          </div>

          <div>
            <span>Saldo após despesas</span>
            <strong>{moeda(saldoMes)}</strong>
          </div>
        </div>
      </section>

      <section className="inferior-financeiro">
        <div className="cartao-financeiro compras-recentes">
          <div className="cabecalho-cartao">
            <div>
              <span className="sobretitulo">SAÍDAS</span>
              <h2>Compras recentes</h2>
            </div>

            <button className="botao-secundario" onClick={aoVerGastos}>
              Ver todos
            </button>
          </div>

          {comprasRecentes.map(item => (
            <div className="linha-compra" key={item.id}>
              <div>
                <strong>{item.descricao}</strong>
                <small>{item.categoria || 'Outros gastos'}</small>
              </div>

              <strong>{moeda(item.valor)}</strong>
            </div>
          ))}

          {comprasRecentes.length === 0 && (
            <p className="estado-vazio">Nenhum gasto cadastrado neste mês.</p>
          )}
        </div>

        <div className="cartao-financeiro capital-giro">
          <span className="sobretitulo">PLANEJAMENTO</span>
          <h2>Capital de giro</h2>

          <div>
            <span>Receita mensal</span>
            <strong>{moeda(entradasMes)}</strong>
          </div>

          <div>
            <span>Custos cadastrados</span>
            <strong>{moeda(gastosMes)}</strong>
          </div>

          <div className="saldo-capital">
            <span>Saldo disponível</span>
            <strong>{moeda(saldoMes)}</strong>
          </div>

          <small>Estimativa calculada com os lançamentos cadastrados.</small>
        </div>
      </section>
    </>
  );
}

export default InicioFinanceiro;
