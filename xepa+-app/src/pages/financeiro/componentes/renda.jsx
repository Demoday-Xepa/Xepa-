import Styles from "./css/renda.module.css";

function Renda({ hoje, semana, mes, data, moeda }) {
    const mesFormatado = data.toLocaleDateString("pt-BR", { month: "long", year: "numeric" }).replace(/^./, letra => letra.toUpperCase());

    return (
        <section className={Styles.rendas}>

            <article className={Styles.card}>

                <h2>Renda de Hoje</h2>
                <p>Feira de hoje</p>
                <strong>{moeda(hoje)}</strong>

            </article>

            <article className={Styles.card}>

                <h2>Renda da Semana</h2>
                <p> Últimos 7 dias</p>
                <strong>{moeda(semana)}</strong>

            </article>

            <article className={`${Styles.card} ${Styles.destaque}`} >

                <h2>Renda do Mês</h2>
                <p>{mesFormatado}</p>
                <strong>{moeda(mes)}</strong>

            </article>

        </section>
    );
}

export default Renda;