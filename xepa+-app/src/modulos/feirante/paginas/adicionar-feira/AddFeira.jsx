import { useMemo, useState } from "react";
import { Pencil, Search } from "lucide-react";
import cestaXepa from "@/assets/imagens/gerais/xepaCompleta.jpg";
import pinLocation from "@/assets/imagens/gerais/PinLocation.png";
import PopUpAdicionarFeira from "@/modulos/feirante/paginas/adicionar-feira/componentes/PopUpAdicionarFeira.jsx";
import PopUpEditarFeira from "@/modulos/feirante/paginas/adicionar-feira/componentes/PopUpEditarFeira.jsx";
import styles from "@/modulos/feirante/paginas/adicionar-feira/estilos/AddFeira.module.css";

const feirasIniciais = [
  { nome: "Rocinha do tio", endereco: "Rua Tito", dias: ["Ter", "Qui"], funcionarios: ["Gabriel", "Hadson"] },
  { nome: "BemBom", endereco: "Rua Borboletas Psicodélicas", dias: ["Sex", "Sáb"], funcionarios: ["Jamilly", "Henrique"] },
  { nome: "Fazendinha", endereco: "Rua Encontros e Despedidas", dias: ["Seg", "Qua"], funcionarios: ["Murilo", "Igor"] },
];

function AddFeira() {
  const [busca, setBusca] = useState("");
  const [modal, setModal] = useState(null);
  const feirasFiltradas = useMemo(() => {
    const termo = busca.trim().toLocaleLowerCase("pt-BR");
    if (!termo) return feirasIniciais;
    return feirasIniciais.filter((feira) =>
      [feira.nome, feira.endereco, ...feira.funcionarios].join(" ").toLocaleLowerCase("pt-BR").includes(termo),
    );
  }, [busca]);

  return (
    <div className={styles.pagina}>

      <main className={styles.conteudo}>
        <section className={styles.apresentacao}>
          <div className={styles.introducao}>
            <h1>Onde Você Trabalha?</h1>
            <p>Cadastre as feiras onde você trabalha<br />para que os consumidores encontrem sua barraca.</p>
          </div>
          <img className={styles.imagemDestaque} src={cestaXepa} alt="Cesta com alimentos frescos" />
        </section>

        <section className={styles.areaFeiras} aria-labelledby="tituloFeiras">
          <div className={styles.faixaFeiras}>
            <img src={pinLocation} alt="" aria-hidden="true" />
            <div><h2 id="tituloFeiras">Minhas Feiras</h2><p>Gerencie os locais onde você trabalha.</p></div>
            <button type="button" className={styles.botaoAdd} onClick={() => setModal({ tipo: "adicionar" })}>+ Adicionar Feira</button>
          </div>

          <form className={styles.busca} onSubmit={(event) => event.preventDefault()}>
            <button type="submit">Busca</button>
            <label className={styles.campoBusca}>
              <span className={styles.visualmenteOculto}>Buscar feira ou endereço</span>
              <Search className={styles.iconeBusca} aria-hidden="true" />
              <input id="busca" type="search" value={busca} onChange={(event) => setBusca(event.target.value)} placeholder="Buscar Feira ou endereço (ex: Rua Henrique morador de Poa)" />
            </label>
          </form>

          <h2 className={styles.tituloLista}>Minhas Feiras Cadastradas:</h2>
          <div className={styles.lista}>
            {feirasFiltradas.map((feira) => {
              return (
                <article className={styles.cartaoFeira} key={`${feira.nome}-${feira.endereco}`}>
                  <div className={styles.dado}><h3>Nome Feira</h3><p>{feira.nome}</p></div>
                  <div className={styles.dado}><h3>Endereço</h3><p>{feira.endereco}</p></div>
                  <div className={styles.dado}><h3>Dias de Trabalho</h3><p>{feira.dias.join(" e ")}</p></div>
                  <div className={styles.dado}><h3>Funcionários</h3><p>{feira.funcionarios.join("; ")}</p></div>
                  <button type="button" className={styles.botaoEditar} aria-label={`Editar ${feira.nome}`} onClick={() => setModal({ tipo: "editar", feira })}><Pencil size={19} aria-hidden="true" /></button>
                </article>
              );
            })}
            {feirasFiltradas.length === 0 && <p className={styles.semResultados}>Nenhuma feira encontrada.</p>}
          </div>
        </section>
      </main>

      <PopUpAdicionarFeira
        aberto={modal?.tipo === "adicionar"}
        onFechar={() => setModal(null)}
        onSalvar={() => setModal(null)}
      />
      <PopUpEditarFeira
        aberto={modal?.tipo === "editar"}
        feira={modal?.feira}
        onFechar={() => setModal(null)}
        onSalvar={() => setModal(null)}
      />
    </div>
  );
}

export default AddFeira;
