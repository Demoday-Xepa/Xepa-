import { useState } from "react";
import Styles from "./css/lancamento.module.css";

function Lancamento({ aberto, tipo, aoFechar, aoSalvar }) {
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState(new Date().toLocaleDateString("en-CA"));
    const [categoria, setCategoria] = useState("Frutas e Verduras");

    if (!aberto) return null;

    function salvar(evento) {
        evento.preventDefault();

        if (!descricao.trim() || Number(valor) <= 0 || !data) return;

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
    }

    return (
        <div className={Styles.fundo} onClick={(evento) => evento.target === evento.currentTarget && aoFechar()}>
            <section className={Styles.modal}>
                <button type="button" className={Styles.fechar} onClick={aoFechar}>×</button>

                <h2>{tipo === "renda" ? "Adicionar renda" : "Adicionar compra"}</h2>

                <form onSubmit={salvar}>
                    <label htmlFor="descricao">Descrição</label>
                    <input id="descricao" value={descricao} onChange={(evento) => setDescricao(evento.target.value)} placeholder="Digite a descrição" required />

                    <label htmlFor="valor">Valor</label>
                    <input id="valor" type="number" min="0.01" step="0.01" value={valor} onChange={(evento) => setValor(evento.target.value)} placeholder="0,00" required />

                    <label htmlFor="data">Data</label>
                    <input id="data" type="date" value={data} onChange={(evento) => setData(evento.target.value)} required />

                    {tipo === "compra" && (
                        <>
                            <label htmlFor="categoria">Categoria</label>
                            <select id="categoria" value={categoria} onChange={(evento) => setCategoria(evento.target.value)}>
                                <option>Frutas</option>
                                <option>Verduras</option>
                                <option>Legumes</option>
                                <option>Cereais e Grãos</option>
                                <option>Embalagens e Sacos</option>
                                <option>Transporte</option>
                                <option>Outros</option>
                            </select>
                        </>
                    )}

                    <div className={Styles.acoes}>
                        <button type="button" className={Styles.cancelar} onClick={aoFechar}>Cancelar</button>
                        <button type="submit" className={Styles.salvar}>Salvar</button>
                    </div>
                </form>
            </section>

            
        </div>
    );
}

export default Lancamento;