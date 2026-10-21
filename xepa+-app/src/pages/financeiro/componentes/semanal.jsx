import Styles from "./css/semanal.module.css";

function Semanal({ lancamentos, inicio, moeda }) {
    const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

    const valores = dias.map((dia, indice) => {
        const data = new Date(inicio);
        data.setDate(data.getDate() + indice);

        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const diaMes = String(data.getDate()).padStart(2, "0");
        const dataFormatada = `${ano}-${mes}-${diaMes}`;

        return lancamentos
            .filter(item => item.data === dataFormatada && item.tipo === "renda")
            .reduce((soma, item) => soma + Number(item.valor), 0);
    });

    const maior = Math.max(...valores, 1);

    return (
        <section className={Styles.grafico}>
            <div className={Styles.dias}>
                {dias.map((dia, indice) => (
                    <div className={Styles.dia} key={dia}>
                        <span className={Styles.nomeDia}>{dia}</span>

                        <div className={Styles.areaBarra}>
                            <div
                                className={`${Styles.barra} ${indice % 2 === 0 ? Styles.barraLimao : ""}`}
                                style={{ height: `${valores[indice] / maior * 100}%` }}
                            />
                        </div>

                        <strong>{moeda(valores[indice])}</strong>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Semanal;