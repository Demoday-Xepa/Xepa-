import { useEffect, useState } from "react";
import "./financeiro.css";

import { NavbarF } from "../../components/navbarFeirante/navbarF";
import Footer from "../../components/footer/footer";

import Renda from "./componentes/renda";
import Semanal from "./componentes/semanal";
import Resumo from "./componentes/resumo";
import Compras from "./componentes/compras";
import Capital from "./componentes/capital";
import Lancamento from "./componentes/lancamento";

function Financeiro() {
    const [lancamentos, setLancamentos] = useState(() => {
        return JSON.parse(localStorage.getItem("lancamentosFinanceiros")) || [];
    });

    const [modalAberto, setModalAberto] = useState(false);
    const [tipo, setTipo] = useState("renda");

    useEffect(() => {
        localStorage.setItem(
            "lancamentosFinanceiros",
            JSON.stringify(lancamentos)
        );
    }, [lancamentos]);

    const hoje = new Date();

    const dataHoje = `${hoje.getFullYear()}-${String(
        hoje.getMonth() + 1
    ).padStart(2, "0")}-${String(hoje.getDate()).padStart(2, "0")}`;

    const inicioSemana = new Date(hoje);
    const dia = hoje.getDay();

    inicioSemana.setDate(
        hoje.getDate() - (dia === 0 ? 6 : dia - 1)
    );

    inicioSemana.setHours(0, 0, 0, 0);

    const mes = hoje.getMonth();
    const ano = hoje.getFullYear();

    const doDia = lancamentos.filter(
        item => item.data === dataHoje
    );

    const daSemana = lancamentos.filter(item => {
        const data = new Date(item.data + "T12:00:00");
        const fimSemana = new Date(inicioSemana);

        fimSemana.setDate(fimSemana.getDate() + 7);

        return data >= inicioSemana && data < fimSemana;
    });

    const doMes = lancamentos.filter(item => {
        const data = new Date(item.data + "T12:00:00");

        return (
            data.getMonth() === mes &&
            data.getFullYear() === ano
        );
    });

    function total(lista, tipoLancamento) {
        let soma = 0;

        lista.forEach(item => {
            if (item.tipo === tipoLancamento) {
                soma += Number(item.valor);
            }
        });

        return soma;
    }

    function moeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    function adicionarLancamento(novoLancamento) {
        setLancamentos(lista => [...lista, novoLancamento]);
        setModalAberto(false);
    }

    function abrirModal(tipoLancamento) {
        setTipo(tipoLancamento);
        setModalAberto(true);
    }

    return (
        <div className="pagina">

            <NavbarF />

            <main className="conteudo">

                <section className="titulo">
                    <div>
                        <h1>Veja seus lucros!</h1>
                        <p>
                            Acompanhe suas rendas, compras e resultados.
                        </p>
                    </div>

                    <div className="botoes">
                        <button onClick={() => abrirModal("renda")}>
                            + Adicionar renda
                        </button>
                    </div>
                </section>

                <Renda
                    hoje={total(doDia, "renda")}
                    semana={total(daSemana, "renda")}
                    mes={total(doMes, "renda")}
                    data={hoje}
                    moeda={moeda}
                />

                <section className="painel">

                    <Semanal
                        lancamentos={daSemana}
                        inicio={inicioSemana}
                        moeda={moeda}
                    />

                    <Resumo
                        receita={total(daSemana, "renda")}
                        custos={total(daSemana, "compra")}
                        moeda={moeda}
                    />

                </section>

                <section className="inferior">

                    <Compras
                        lancamentos={daSemana}
                        moeda={moeda}
                        aoAdicionar={() => abrirModal("compra")}
                    />

                    <Capital
                        receita={total(doMes, "renda")}
                        moeda={moeda}
                    />

                </section>

            </main>

            <Footer />

            <Lancamento
                aberto={modalAberto}
                tipo={tipo}
                aoFechar={() => setModalAberto(false)}
                aoSalvar={adicionarLancamento}
            />

        </div>
    );
}

export default Financeiro;