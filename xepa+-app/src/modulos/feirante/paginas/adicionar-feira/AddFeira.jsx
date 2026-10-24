import { useState } from "react";
import PopUpAddFeira from "@/modulos/feirante/paginas/adicionar-feira/componentes/PopUpAddFeira.jsx";
import styles from "@/modulos/feirante/paginas/adicionar-feira/estilos/AddFeira.module.css";

const feiras = [
  { nome: "Rocinha do tio", endereco: "Rua Tito", dia: "Terças e Quintas", funcionario: "Matheus , Carneiro" },
  { nome: "BemBom", endereco: "Rua Borboletas Psicodélicas", dia: "Sábados e Sextas", funcionario: "Jamilly , Henrique" },
  { nome: "Fazendinha", endereco: "Rua Encontros e Despedidas", dia: "Segundas e Quartas", funcionario: "Murilo , Igor" },
  
];

function AddFeira() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className={styles.pagina}>

      <main className={styles.conteudo}>
        <h1>Onde você trabalha?</h1>
        <p className={styles.subtitulo}>
          Disponibilidades e locais da sua feira favorita.
        </p>

        <div className={styles.busca}>
          <div className={styles.campoBusca}>
            <label htmlFor="busca">Busca :</label>
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

      

      <PopUpAddFeira aberto={aberto} onFechar={() => setAberto(false)} />
    </div>
  );
}

export default AddFeira;