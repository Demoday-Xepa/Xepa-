import { useState } from 'react';
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
  aoVerGastos,
  removerLancamento
}) {
  const [buscaLucro, setBuscaLucro] = useState('');
  const [periodoLucro, setPeriodoLucro] = useState('dia');
  const [filtroAberto, setFiltroAberto] = useState(false);

  function obterLucrosFiltrados() {
    let lista = lancamentosMes.filter(
      item => item.tipo === 'renda'
    );

    if (periodoLucro === 'dia') {
      const dataAtual = [
        hoje.getFullYear(),
        String(hoje.getMonth() + 1).padStart(2, '0'),
        String(hoje.getDate()).padStart(2, '0')
      ].join('-');

      lista = lista.filter(
        item => item.data === dataAtual
      );
    }

    if (periodoLucro === 'semana') {
      const inicioSemana = new Date(hoje);
      inicioSemana.setHours(0, 0, 0, 0);

      const diaSemana = inicioSemana.getDay();

      const diferenca =
        diaSemana === 0 ? 6 : diaSemana - 1;

      inicioSemana.setDate(
        inicioSemana.getDate() - diferenca
      );

      const fimSemana = new Date(inicioSemana);
      fimSemana.setDate(
        fimSemana.getDate() + 7
      );

      lista = lista.filter(item => {
        const dataLancamento = new Date(
          `${item.data}T12:00:00`
        );

        return (
          dataLancamento >= inicioSemana &&
          dataLancamento < fimSemana
        );
      });
    }

    if (periodoLucro === 'mes') {
      const mesAtual =
        `${hoje.getFullYear()}-${String(
          hoje.getMonth() + 1
        ).padStart(2, '0')}`;

      lista = lista.filter(
        item => item.data.slice(0, 7) === mesAtual
      );
    }

    const termo = buscaLucro
      .trim()
      .toLowerCase();

    if (termo) {
      lista = lista.filter(item =>
        item.descricao
          .toLowerCase()
          .includes(termo) ||
        String(item.categoria || '')
          .toLowerCase()
          .includes(termo)
      );
    }

    return lista;
  }

  const lucrosFiltrados = obterLucrosFiltrados();

  const semanas = [0, 1, 2, 3, 4].map(numero => {
    const itens = lancamentosMes.filter(item => {
      const dia = Number(item.data.slice(-2));

      return (
        item.tipo === 'renda' &&
        Math.floor((dia - 1) / 7) === numero
      );
    });

    return {
      nome: `Semana ${numero + 1}`,
      valor: total(itens, 'renda')
    };
  });

  const maiorLucro = Math.max(
    1,
    ...semanas.map(item =>
      Math.max(0, item.valor)
    )
  );

  const margem =
    entradasMes > 0
      ? (
          (saldoMes / entradasMes) *
          100
        ).toFixed(1)
      : '0.0';

  return (
    <>
      {/* título */}

      <section className="titulo-lucros">
        <div>
          <h1>Seus lucros em um só lugar.</h1>

          <p>
            Cadastre e gerencie suas entradas para ter
            maior controle sobre sua receita.
          </p>
        </div>

        <button
          className="botao-adicionar-lucro"
          onClick={() => aoAbrirModal('renda')}
        >
          + Adicionar renda
        </button>
      </section>

      {/* três colunas */}

      <section className="indicadores-financeiros indicador-lucro">
        <article>
          <p>Receita bruta</p>

          <strong>
            {moeda(entradasMes)}
          </strong>

          <small>
            Total de entradas no mês
          </small>
        </article>

        <article>
          <p>Custos</p>

          <strong>
            {moeda(gastosMes)}
          </strong>

          <small>
            {
              lancamentosMes.filter(
                item => item.tipo === 'compra'
              ).length
            } lançamentos
          </small>
        </article>

        <article>
          <p>Média semanal</p>

          <strong>
            {moeda(
              saldoMes /
              Math.max(
                1,
                Math.ceil(
                  hoje.getDate() / 7
                )
              )
            )}
          </strong>

          <small>
            Saldo médio por semana transcorrida
          </small>
        </article>
      </section>

      {/* busca de lucros */}

      <section className="busca-lucros">
        <div className="campo-busca-lucros">
          <label htmlFor="busca-lucro">
            Buscar lucros
          </label>

          <input
            id="busca-lucro"
            value={buscaLucro}
            onChange={evento =>
              setBuscaLucro(
                evento.target.value
              )
            }
            placeholder="Buscar por descrição ou categoria"
          />

          <span aria-hidden="true">
            ⌕
          </span>
        </div>

        <button
          className="botao-filtro-lucros"
          onClick={() =>
            setFiltroAberto(!filtroAberto)
          }
        >
          {filtroAberto
            ? 'Ocultar filtro'
            : 'Filtrar'}
        </button>
      </section>

      {filtroAberto && (
        <div className="filtro-lucros">
          <label htmlFor="periodo-lucro">
            Período
          </label>

          <select
            id="periodo-lucro"
            value={periodoLucro}
            onChange={evento =>
              setPeriodoLucro(
                evento.target.value
              )
            }
          >
            <option value="dia">
              Diário
            </option>

            <option value="semana">
              Semanal
            </option>

            <option value="mes">
              Mensal
            </option>
          </select>
        </div>
      )}

      {/* abas */}

      <div className="abas-periodo-lucros">
        {[
          ['dia', 'Diário'],
          ['semana', 'Semanal'],
          ['mes', 'Mensal']
        ].map(([valor, texto]) => (
          <button
            key={valor}
            className={
              periodoLucro === valor
                ? 'selecionado'
                : ''
            }
            onClick={() =>
              setPeriodoLucro(valor)
            }
          >
            {texto}
          </button>
        ))}
      </div>

      {/* lucros do período */}

      <section className="lista-lucros">
        <div className="titulo-lista-lucros">
          <div>
            <span className="sobretitulo">
              LANÇAMENTOS
            </span>

            <h2>
              Lucros do período
            </h2>
          </div>

          <strong>
            {lucrosFiltrados.length}{' '}
            {lucrosFiltrados.length === 1
              ? 'registro'
              : 'registros'}
          </strong>
        </div>

        {lucrosFiltrados.map(item => (
          <article
            className="linha-lucro"
            key={item.id}
          >
            <div className="lucro-descricao">
              <i />

              <div>
                <small>
                  Com o quê?
                </small>

                <strong>
                  {item.descricao}
                </strong>

                <span>
                  {item.categoria ||
                    'Venda'}
                  {' · '}
                  {new Date(
                    `${item.data}T12:00:00`
                  ).toLocaleDateString(
                    'pt-BR'
                  )}
                </span>
              </div>
            </div>

            <div className="informacao-lucro">
              <small>
                Quantidade
              </small>

              <strong>
                {item.quantidade || 1}
              </strong>
            </div>

            <div className="informacao-lucro">
              <small>
                Valor unitário
              </small>

              <strong>
                {moeda(
                  item.valorUnitario ||
                  item.valor
                )}
              </strong>
            </div>

            <div className="informacao-lucro">
              <small>
                Valor total
              </small>

              <strong>
                {moeda(item.valor)}
              </strong>
            </div>

            <button
              className="botao-excluir-lucro"
              title="Excluir lucro"
              aria-label={
                `Excluir ${item.descricao}`
              }
              onClick={() => {
                if (
                  window.confirm(
                    `Deseja excluir "${item.descricao}"?`
                  )
                ) {
                  removerLancamento(
                    item.id
                  );
                }
              }}
            >
              ×
            </button>
          </article>
        ))}

        {lucrosFiltrados.length === 0 && (
          <p className="estado-vazio-lucros">
            Nenhum lucro encontrado nesse período.
          </p>
        )}
      </section>

      {/* duas colunas */}

      <section className="painel-financeiro painel-lucros">
        <div className="cartao-financeiro">
          <div className="cabecalho-cartao">
            <div>
              <span className="sobretitulo">
                EVOLUÇÃO
              </span>

              <h2>
                Resultado por semana
              </h2>
            </div>

            <span>
              {hoje.toLocaleDateString(
                'pt-BR',
                {
                  month: 'long',
                  year: 'numeric'
                }
              )}
            </span>
          </div>

          <div className="barras-lucro">
            {semanas.map(item => (
              <div
                className="barra-semana"
                key={item.nome}
              >
                <strong>
                  {moeda(item.valor)}
                </strong>

                <div>
                  <span
                    style={{
                      height: `${Math.max(
                        3,
                        (Math.max(
                          0,
                          item.valor
                        ) /
                          maiorLucro) *
                          100
                      )}%`
                    }}
                  />
                </div>

                <small>
                  {item.nome}
                </small>
              </div>
            ))}
          </div>
        </div>

        <div className="cartao-financeiro composicao">
          <span className="sobretitulo">
            COMPOSIÇÃO
          </span>

          <h2>
            Receitas e despesas
          </h2>

          <div className="barra-composicao">
            <span
              style={{
                width: `${
                  entradasMes > 0
                    ? Math.min(
                        100,
                        (gastosMes /
                          entradasMes) *
                          100
                      )
                    : 0
                }%`
              }}
            />
          </div>

          <p>
            <i className="ponto-verde" />

            Saldo após despesas

            <strong>
              {moeda(saldoMes)}
            </strong>
          </p>

          <p>
            <i className="ponto-limao" />

            Custos e compras

            <strong>
              {moeda(gastosMes)}
            </strong>
          </p>

          <button
            className="botao-largo botao-secundario"
            onClick={aoVerGastos}
          >
            Ver todos os gastos
          </button>
        </div>
      </section>
    </>
  );
}

export default LucrosFinanceiro;
