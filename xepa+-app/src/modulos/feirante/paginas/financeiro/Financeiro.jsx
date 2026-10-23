import { useState } from 'react';
import '@/modulos/feirante/paginas/financeiro/financeiro.css';
import { NavbarF } from '@/modulos/feirante/componentes/navegacao/NavbarF.jsx';
import Footer from '@/modulos/feirante/componentes/rodape/Footer.jsx';
import useFinanceiro from '@/modulos/feirante/hooks/useFinanceiro';
import Renda from '@/modulos/feirante/paginas/financeiro/componentes/Renda.jsx';
import Semanal from '@/modulos/feirante/paginas/financeiro/componentes/Semanal.jsx';
import Resumo from '@/modulos/feirante/paginas/financeiro/componentes/Resumo.jsx';
import Compras from '@/modulos/feirante/paginas/financeiro/componentes/Compras.jsx';
import Capital from '@/modulos/feirante/paginas/financeiro/componentes/Capital.jsx';
import Lancamento from '@/modulos/feirante/paginas/financeiro/componentes/Lancamento.jsx';

function Financeiro() {
  const [modalAberto, setModalAberto] = useState(false);
  const [tipo, setTipo] = useState('renda');
  const {
    lancamentos,
    adicionarLancamento,
    hoje,
    inicioSemana,
    doDia,
    daSemana,
    doMes,
    total,
    moeda,
  } = useFinanceiro();

  function salvarLancamento(novoLancamento) {
    adicionarLancamento(novoLancamento);
    setModalAberto(false);
  }

  function abrirModal(tipoLancamento) {
    setTipo(tipoLancamento);
    setModalAberto(true);
  }

  return (
    <div className="pagina">
      <NavbarF />
      <main className="conteudo">
        <section className="titulo">
          <div>
            <h1>Veja seus lucros!</h1>
            <p>Acompanhe suas rendas, compras e resultados.</p>
          </div>
          <div className="botoes">
            <button onClick={() => abrirModal('renda')}>+ Adicionar renda</button>
          </div>
        </section>

        <Renda
          hoje={total(doDia, 'renda')}
          semana={total(daSemana, 'renda')}
          mes={total(doMes, 'renda')}
          data={hoje}
          moeda={moeda}
        />

        <section className="painel">
          <Semanal lancamentos={daSemana} inicio={inicioSemana} moeda={moeda} />
          <Resumo
            receita={total(daSemana, 'renda')}
            custos={total(daSemana, 'compra')}
            moeda={moeda}
          />
        </section>

        <section className="inferior">
          <Compras
            lancamentos={daSemana}
            moeda={moeda}
            aoAdicionar={() => abrirModal('compra')}
          />
          <Capital receita={total(doMes, 'renda')} moeda={moeda} />
        </section>
      </main>

      <Footer />
      <Lancamento
        aberto={modalAberto}
        tipo={tipo}
        aoFechar={() => setModalAberto(false)}
        aoSalvar={salvarLancamento}
      />
    </div>
  );
}

export default Financeiro;
