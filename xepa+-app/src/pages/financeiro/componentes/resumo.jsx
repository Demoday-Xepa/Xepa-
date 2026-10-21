import Styles from "./css/resumo.module.css";

function Resumo({ receita, custos, moeda }) {
    const margem = receita - custos;

    return (
        <section className={Styles.resumo}>

            <h2>Resumo da Semana</h2>

            <div className={Styles.linha}>

                <span>Receita Bruta</span>
                <strong>{moeda(receita)}</strong>

            </div>

            <div className={Styles.linha}>

                <span>Custo dos Produtos</span>
                <strong>- {moeda(custos)}</strong>

            </div>

            <div className={Styles.total}>
                <span>Margem após produtos</span>

                <strong>{moeda(margem)}</strong>
            </div>

        </section>
    );
}

export default Resumo;