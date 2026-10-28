import { useEffect, useState } from 'react';
import {
  carregarLancamentosFinanceiros,
  salvarLancamentosFinanceiros,
} from '@/modulos/feirante/servicos/lancamentosFinanceiros';

export default function useFinanceiro() {
  const [lancamentos, setLancamentos] = useState(carregarLancamentosFinanceiros);

  useEffect(() => {
    salvarLancamentosFinanceiros(lancamentos);
  }, [lancamentos]);

  const hoje = new Date();
  const dataHoje = `${hoje.getFullYear()}-${String(
    hoje.getMonth() + 1,
  ).padStart(2, '0')}-${String(hoje.getDate()).padStart(2, '0')}`;
  const inicioSemana = new Date(hoje);
  const dia = hoje.getDay();

  inicioSemana.setDate(hoje.getDate() - (dia === 0 ? 6 : dia - 1));
  inicioSemana.setHours(0, 0, 0, 0);

  const mes = hoje.getMonth();
  const ano = hoje.getFullYear();
  const doDia = lancamentos.filter((item) => item.data === dataHoje);
  const daSemana = lancamentos.filter((item) => {
    const data = new Date(item.data + 'T12:00:00');
    const fimSemana = new Date(inicioSemana);
    fimSemana.setDate(fimSemana.getDate() + 7);
    return data >= inicioSemana && data < fimSemana;
  });
  const doMes = lancamentos.filter((item) => {
    const data = new Date(item.data + 'T12:00:00');
    return data.getMonth() === mes && data.getFullYear() === ano;
  });

  function total(lista, tipoLancamento) {
    let soma = 0;
    lista.forEach((item) => {
      if (item.tipo === tipoLancamento) soma += Number(item.valor);
    });
    return soma;
  }

  function moeda(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  function adicionarLancamento(novoLancamento) {
    setLancamentos((lista) => [...lista, novoLancamento]);
  }

  return {
    lancamentos,
    adicionarLancamento,
    hoje,
    inicioSemana,
    doDia,
    daSemana,
    doMes,
    total,
    moeda,
  };
}
