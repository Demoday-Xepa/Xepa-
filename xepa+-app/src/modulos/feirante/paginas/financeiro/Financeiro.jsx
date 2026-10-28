
import { useState } from 'react';
import './financeiro.css';

import useFinanceiro from './hooks/useFinanceiro';

import NavBarFinanceiro from './componentes/NavBarFinanceiro';
import InicioFinanceiro from './componentes/InicioFinanceiro';
import LucrosFinanceiro from './componentes/LucrosFinanceiro';
import GastosFinanceiro from './componentes/GastosFinanceiro';
import Lancamento from './componentes/Lancamento';

function Financeiro() {
  const [pagina, setPagina] = useState('inicio');
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoLancamento, setTipoLancamento] = useState('compra');

  const [busca, setBusca] = useState('');
  const [periodo, setPeriodo] = useState('dia');
  const [filtroAberto, setFiltroAberto] = useState(false);

  const {
    lancamentos,
    adicionarLancamento,
    removerLancamento,
    moeda,
    total,
    hoje,
    dataHoje,
    entradasMes,
    gastosMes,
    saldoMes,
    lancamentosMes,
    lancamentosHoje,
    lancamentosSemana,
    gastosFiltrados,
    receitasHoje,
    gastosHoje
  } = useFinanceiro();

  function abrirModal(tipo) {
    setTipoLancamento(tipo);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }

  function salvarLancamento(dados) {
    adicionarLancamento(dados);
    fecharModal();
  }

  function abrirGastos() {
    setPagina('gastos');
  }

  const dados = {
    moeda,
    total,
    hoje,
    dataHoje,
    lancamentos,
    entradasMes,
    gastosMes,
    saldoMes,
    lancamentosMes,
    lancamentosHoje,
    lancamentosSemana,
    receitasHoje,
    gastosHoje,
    aoAbrirModal: abrirModal,
    aoVerGastos: abrirGastos,
    removerLancamento
  };

  return (
    <main className="pagina-financeiro">
      <NavBarFinanceiro
        pagina={pagina}
        setPagina={setPagina}
      />

      <div className="conteudo-financeiro">
        {pagina === 'inicio' && (
          <InicioFinanceiro {...dados} />
        )}

        {pagina === 'lucros' && (
          <LucrosFinanceiro {...dados} />
        )}

        {pagina === 'gastos' && (
          <GastosFinanceiro
            {...dados}
            busca={busca}
            setBusca={setBusca}
            periodo={periodo}
            setPeriodo={setPeriodo}
            filtroAberto={filtroAberto}
            setFiltroAberto={setFiltroAberto}
            itensGastos={gastosFiltrados(busca, periodo)}
            listaPeriodo={gastosFiltrados('', periodo)}
          />
        )}
      </div>

      {modalAberto && (
        <Lancamento
          aberto={modalAberto}
          tipo={tipoLancamento}
          aoSalvar={salvarLancamento}
          aoFechar={fecharModal}
          dataHoje={dataHoje}
        />
      )}
    </main>
  );
}

export default Financeiro;
