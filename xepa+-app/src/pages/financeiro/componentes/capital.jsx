import Styles from "./css/capital.module.css";

function Capital({ receita, moeda }) {
    const custos = receita * 0.65;
    const reserva = receita * 0.20;

    return (
        <section className={Styles.capital}>

            <h2>Capital de Giro</h2>

            <p className={Styles.aviso}>Simulação · não é conselho financeiro</p>

            <div className={Styles.linha}>

                <span>Receita mensal - dados registrados</span>
                <strong>{moeda(receita)}</strong>

            </div>

            <div className={Styles.linha}>

                <span>Orçamento mensal de custos (65%)</span>
                <strong>{moeda(custos)}</strong>

            </div>

            <div className={Styles.reserva}>

                <span>Reserva simulada: 20% da receita</span>
                <strong>{moeda(reserva)}</strong>

            </div>

            <p className={Styles.rodape}>Reserva simulada para manter a banca e financiar compras futuras.</p>

        </section>
    );
}

export default Capital;