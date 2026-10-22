import Header from "./componentes/header";
import Footer from "./componentes/footer";
import ProdutoTopo from "./componentes/ProdutoTopo";
import LocalizacaoPerfil from "./componentes/LocalizacaoPerfil";
import styles from "./css/DetalheProduto.module.css";
import foto from "../../imgs/Produto.jpg";

const produto = {
  categoria: "Verduras",
  nome: "Xepa",
  nota: "4,8",
  avaliacoes: 128,
  preco: "R$10,50",
  unidade: "/500g",
  descricao:
    "Aproveite a nossa seleção diária de verduras frescas da feira com desconto especial! Alimentos nutritivos e prontos para consumo, cuidadosamente embalados para garantir a máxima qualidade na sua mesa.",
  retirada: "Segunda, 19 Out",
  estoque: 6,
  imagens: [foto, foto, foto, foto],
};

const feira = {
  nome: "Feira do Seu João",
  distancia: "2,5 km de você",
  endereco: "Rua das Flores, próximo à praça central",
  mapa: "https://www.google.com/maps/d/embed?mid=1EFC34Itz2fA_edggcqhOTNCDfBQKLbE&ehbc=2E312F",
};

const feirante = {
  nome: "João da Silva",
  barraca: "Barraca do Seu João",
  descricao: "Frutas, verduras e legumes fresquinhos",
  horario: "Seg. a sáb. • 6h às 13h",
};

function DetalheProduto() {
  return (
    <div className={styles.pagina}>
      <Header />

      <main className={styles.conteudo}>
        <ProdutoTopo produto={produto} />
        <LocalizacaoPerfil feira={feira} feirante={feirante} />
      </main>

      <Footer />
    </div>
  );
}

export default DetalheProduto;