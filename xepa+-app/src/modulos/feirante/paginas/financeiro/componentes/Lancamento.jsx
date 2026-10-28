
import { useState } from "react";
import Styles from "@/modulos/feirante/paginas/financeiro/componentes/estilos/lancamento.module.css";

function Lancamento({ aberto, tipo, aoFechar, aoSalvar }) {
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState(new Date().toLocaleDateString("en-CA"));
    const [categoria, setCategoria] = useState("Frutas");

    if (!aberto) return null;

    function salvar(evento) {
        evento.preventDefault();

        if (!descricao.trim() || Number(valor) <= 0 || !data) {
            return;
        }

        aoSalvar({
            id: Date.now(),
            tipo,
            descricao: descricao.trim(),
            valor: Number(valor),
            data,
            categoria: tipo === "compra" ? categoria : ""
        });

        setDescricao("");
        setValor("");
        setData(new Date().toLocaleDateString("en-CA"));
        setCategoria("Frutas");
        aoFechar();
    }

    return (
        <div
            className={Styles.fundo}
            onClick={(evento) => {
                if (evento.target === evento.currentTarget) {
                    aoFechar();
                }
            }}
        >
            <section className={Styles.modal}>
                <button
                    type="button"
                    className={Styles.fechar}
                    onClick={aoFechar}
                    aria-label="Fechar formulário"
                >
                    ×
                </button>

                <span className={Styles.sobretitulo}>
                    CONTROLE FINANCEIRO
                </span>

                <h2>
                    {tipo === "renda" ? "Adicionar renda" : "Adicionar gasto"}
                </h2>

                <p className={Styles.descricaoModal}>
                    {tipo === "renda"
                        ? "Registre uma entrada no seu financeiro."
                        : "Registre uma compra ou despesa do seu negócio."}
                </p>

                <form onSubmit={salvar}>
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        id="descricao"
                        type="text"
                        value={descricao}
                        onChange={(evento) => setDescricao(evento.target.value)}
                        placeholder={
                            tipo === "renda"
                                ? "Ex.: Venda de frutas"
                                : "Ex.: Compra de mercadorias"
                        }
                        required
                    />

                    <label htmlFor="valor">Valor total (R$)</label>
                    <input
                        id="valor"
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={valor}
                        onChange={(evento) => setValor(evento.target.value)}
                        placeholder="0,00"
                        required
                    />

                    <label htmlFor="data">Data</label>
                    <input
                        id="data"
                        type="date"
                        value={data}
                        onChange={(evento) => setData(evento.target.value)}
                        required
                    />

                    {tipo === "compra" && (
                        <>
                            <label htmlFor="categoria">Categoria do gasto</label>
                            <select
                                id="categoria"
                                value={categoria}
                                onChange={(evento) => setCategoria(evento.target.value)}
                                required
                            >
                                <option value="Frutas">Frutas</option>
                                <option value="Verduras">Verduras</option>
                                <option value="Legumes">Legumes</option>
                                <option value="Cereais e Grãos">Cereais e Grãos</option>
                                <option value="Embalagens e Sacos">Embalagens e Sacos</option>
                                <option value="Transporte">Transporte</option>
                                <option value="Funcionário">Funcionário</option>
                                <option value="Outros">Outros</option>
                            </select>
                        </>
                    )}

                    <div className={Styles.acoes}>
                        <button
                            type="button"
                            className={Styles.cancelar}
                            onClick={aoFechar}
                        >
                            Cancelar
                        </button>

                        <button type="submit" className={Styles.salvar}>
                            Salvar
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Lancamento;
