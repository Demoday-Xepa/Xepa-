import { useEffect, useRef, useState } from "react";

const formatarMoeda = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function FormularioGasto({ styles, modo, gasto, onFechar, onSalvar }) {
  const estaEditando = modo === "editar";

  // O formulário só existe enquanto o popup está aberto, então basta iniciar o estado com o gasto
  const [descricao, setDescricao] = useState(gasto?.descricao ?? "");
  const [quantidade, setQuantidade] = useState(gasto ? String(gasto.quantidade) : "");
  const [valorUnitario, setValorUnitario] = useState(gasto ? String(gasto.valorUnitario) : "");

  const formRef = useRef(null);
  const primeiroCampo = useRef(null);

  const valorTotal =
    quantidade !== "" && valorUnitario !== ""
      ? formatarMoeda(Number(quantidade) * Number(valorUnitario))
      : "";

  useEffect(() => {
    primeiroCampo.current?.focus();
  }, []);

  useEffect(() => {
    const aoApertar = (evento) => evento.key === "Escape" && onFechar();
    window.addEventListener("keydown", aoApertar);
    return () => window.removeEventListener("keydown", aoApertar);
  }, [onFechar]);

  function montarDados() {
    return {
      descricao: descricao.trim(),
      quantidade: Number(quantidade),
      valorUnitario: Number(valorUnitario),
    };
  }

  function salvar(evento) {
    evento.preventDefault();
    onSalvar(montarDados(), { continuar: false });
  }

  // Salva o gasto atual e deixa o formulário limpo para o próximo
  function cadastrarOutro() {
    if (!formRef.current.reportValidity()) return;
    onSalvar(montarDados(), { continuar: true });
    setDescricao("");
    setQuantidade("");
    setValorUnitario("");
    primeiroCampo.current?.focus();
  }

  return (
    <div className={styles.fundo} onClick={onFechar}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tituloModalGasto"
        onClick={(evento) => evento.stopPropagation()}
      >
        <div className={styles.topo}>
          <h2 id="tituloModalGasto">{estaEditando ? "Editar Gasto" : "Adicionar Gasto"}</h2>
        </div>

        <form className={styles.form} ref={formRef} onSubmit={salvar}>
          <div className={styles.campo}>
            <label htmlFor="descricaoGasto">Com oque você gastou?</label>
            <input
              id="descricaoGasto"
              name="descricao"
              ref={primeiroCampo}
              value={descricao}
              onChange={(evento) => setDescricao(evento.target.value)}
              placeholder="Compra de alface"
              required
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="quantidadeGasto">Quantidade</label>
            <input
              id="quantidadeGasto"
              name="quantidade"
              type="number"
              inputMode="decimal"
              min="0.01"
              step="any"
              value={quantidade}
              onChange={(evento) => setQuantidade(evento.target.value)}
              placeholder="10"
              required
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="valorUnitarioGasto">Valor unitário</label>
            <input
              id="valorUnitarioGasto"
              name="valorUnitario"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={valorUnitario}
              onChange={(evento) => setValorUnitario(evento.target.value)}
              placeholder="R$ 3,00"
              required
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="valorTotalGasto">Valor total</label>
            <input
              id="valorTotalGasto"
              name="valorTotal"
              value={valorTotal}
              placeholder="R$ 30,00"
              readOnly
              aria-live="polite"
            />
          </div>

          {!estaEditando && (
            <button type="button" className={styles.secundario} onClick={cadastrarOutro}>
              Cadastrar outro gasto
            </button>
          )}
          <button type="submit" className={styles.principal}>
            {estaEditando ? "Salvar" : "Registrar Gasto"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioGasto;
