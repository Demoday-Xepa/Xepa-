const CHAVE_LANCAMENTOS = 'lancamentosFinanceiros';

export function carregarLancamentosFinanceiros() {
  return JSON.parse(localStorage.getItem(CHAVE_LANCAMENTOS)) || [];
}

export function salvarLancamentosFinanceiros(lancamentos) {
  localStorage.setItem(CHAVE_LANCAMENTOS, JSON.stringify(lancamentos));
}
