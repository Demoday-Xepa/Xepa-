
import { useEffect, useMemo, useState } from 'react';

const CHAVE = 'lancamentosFinanceiros';

function obterDataHoje() {
  const data = new Date();
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const dia = String(data.getDate()).padStart(2, '0');

  return `${ano}-${mes}-${dia}`;
}

function lerLancamentos() {
  try {
    const dados = localStorage.getItem(CHAVE);

    if (dados) {
      const lista = JSON.parse(dados);

      if (Array.isArray(lista)) {
        return lista;
      }
    }
  } catch {
    return [];
  }

  return [];
}

function useFinanceiro() {
  const [lancamentos, setLancamentos] = useState(lerLancamentos);
  const hoje = useMemo(() => new Date(), []);
  const dataHoje = obterDataHoje();

  useEffect(() => {
    localStorage.setItem(CHAVE, JSON.stringify(lancamentos));
  }, [lancamentos]);

  const lancamentosMes = useMemo(() => {
    return lancamentos.filter(item => {
      return item.data.slice(0, 7) === dataHoje.slice(0, 7);
    });
  }, [lancamentos, dataHoje]);

  const lancamentosHoje = useMemo(() => {
    return lancamentos.filter(item => item.data === dataHoje);
  }, [lancamentos, dataHoje]);

  const lancamentosSemana = useMemo(() => {
    const inicio = new Date(hoje);
    inicio.setHours(0, 0, 0, 0);
    inicio.setDate(hoje.getDate() - ((hoje.getDay() + 6) % 7));

    const fim = new Date(inicio);
    fim.setDate(inicio.getDate() + 7);

    return lancamentos.filter(item => {
      const data = new Date(`${item.data}T12:00:00`);
      return data >= inicio && data < fim;
    });
  }, [lancamentos, hoje]);

  function total(lista, tipo) {
    return lista
      .filter(item => item.tipo === tipo)
      .reduce((soma, item) => soma + Number(item.valor || 0), 0);
  }

  const entradasMes = total(lancamentosMes, 'renda');
  const gastosMes = total(lancamentosMes, 'compra');
  const saldoMes = entradasMes - gastosMes;

  const receitasHoje = total(lancamentosHoje, 'renda');
  const gastosHoje = total(lancamentosHoje, 'compra');

  function adicionarLancamento(dados) {
    const novoLancamento = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      tipo: dados.tipo,
      descricao: dados.descricao.trim(),
      categoria: dados.categoria,
      quantidade: Number(dados.quantidade || 1),
      valorUnitario: Number(dados.valorUnitario || dados.valor),
      valor: Number(dados.valor),
      data: dados.data,
      observacao: dados.observacao || ''
    };

    setLancamentos(lista => [novoLancamento, ...lista]);
  }

  function removerLancamento(id) {
    setLancamentos(lista => lista.filter(item => item.id !== id));
  }

  function moeda(valor) {
    return Number(valor || 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  function gastosFiltrados(busca = '', periodo = 'mes') {
    const termo = busca.trim().toLowerCase();

    let lista = lancamentos.filter(item => item.tipo === 'compra');

    if (periodo === 'dia') {
      lista = lista.filter(item => item.data === dataHoje);
    }

    if (periodo === 'semana') {
      const inicio = new Date(hoje);
      inicio.setHours(0, 0, 0, 0);
      inicio.setDate(hoje.getDate() - ((hoje.getDay() + 6) % 7));

      const fim = new Date(inicio);
      fim.setDate(inicio.getDate() + 7);

      lista = lista.filter(item => {
        const data = new Date(`${item.data}T12:00:00`);
        return data >= inicio && data < fim;
      });
    }

    if (periodo === 'mes') {
      lista = lista.filter(item => {
        return item.data.slice(0, 7) === dataHoje.slice(0, 7);
      });
    }

    return lista.filter(item => {
      return (
        item.descricao.toLowerCase().includes(termo) ||
        String(item.categoria || '').toLowerCase().includes(termo)
      );
    });
  }

  return {
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
    receitasHoje,
    gastosHoje,
    gastosFiltrados
  };
}

export default useFinanceiro;
