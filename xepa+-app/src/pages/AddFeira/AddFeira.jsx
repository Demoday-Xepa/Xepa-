import { useState } from "react";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import PopUpAddFeira from "./componentes/popUpAddFeira";
import styles from "./css/AddFeira.module.css";

const feiras = [
  { nome: "Rocinha do tio", endereco: "Senac, Lapa Tito", dia: "Terças e Quintas", funcionario: "Murilo , Carneiro" },
  { nome: "Rocinha do tio", endereco: "Senac, Lapa Tito", dia: "Terças e Quintas", funcionario: "Murilo , Carneiro" },
  { nome: "Rocinha do tio", endereco: "Senac, Lapa Tito", dia: "Terças e Quintas", funcionario: "Murilo , Carneiro" },
];

function AddFeira() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className={styles.pagina}>
      <Header />

      <main className={styles.conteudo}>
        <h1>Onde você trabalha?</h1>
        <p className={styles.subtitulo}>
          Disponibilidades e locais da sua feira favorita.
        </p>

        <div className={styles.busca}>
          <div className={styles.campoBusca}>
            <label htmlFor="busca">Busca</label>
            <input id="busca" type="text" placeholder="Ex: Rua joão de campos" />
          </div>

          <button
            type="button"
            className={styles.botaoAdd}
            aria-label="Adicionar feira"
            onClick={() => setAberto(true)}
          >
            +
          </button>
        </div>

        <div className={styles.tabelaScroll}>
          <div className={styles.tabela}>
            <div className={styles.cabecalho}>
              <span>Nome da feira</span>
              <span>Endereço</span>
              <span>Dia</span>
              <span>Funcionário</span>
            </div>

            {feiras.map((feira, index) => (
              <div className={styles.linha} key={index}>
                <span>{feira.nome}</span>
                <span>{feira.endereco}</span>
                <span>{feira.dia}</span>
                <span>{feira.funcionario}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <PopUpAddFeira aberto={aberto} onFechar={() => setAberto(false)} />
    </div>
  );
}

export default AddFeira;