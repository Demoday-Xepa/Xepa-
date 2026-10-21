import Styles from "./css/compras.module.css";

function Compras({ lancamentos, moeda, aoAdicionar }) {
    const compras = lancamentos
        .filter(item => item.tipo === "compra")
        .sort((a, b) => b.data.localeCompare(a.data))
        .slice(0, 3);

    const recentes = compras.slice(0, 3);
    const total = compras.reduce((soma, item) => soma + item.valor, 0);

    return (
        <section className={Styles.compras}>
            <div className={Styles.cabecalho}>
                <h2>Compras da Semana</h2>
                <button type="button" className={Styles.verMais}>Ver mais</button>
            </div>

            <div className={Styles.lista}>
                {recentes.length === 0 ? (
                    <p className={Styles.vazio}>Nenhuma compra registrada nesta semana.</p>
                ) : (
                    recentes.map(item => (
                        <article className={Styles.item} key={item.id}>
                            <div>
                                <span>{item.categoria || "Outros"}</span>
                                <strong>{moeda(item.valor)}</strong>
                            </div>
                            <time>{new Date(item.data + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })}</time>
                        </article>
                    ))
                )}
            </div>

            <div className={Styles.total}>
                <span>Total Previsto</span>
                <strong>{moeda(total)}</strong>
            </div>

            <button type="button" onClick={aoAdicionar}>Registrar Compra</button>
        </section>
    );
}

export default Compras;