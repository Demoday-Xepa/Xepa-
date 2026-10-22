import { useState } from "react";
import styles from "../css/ProdutoTopo.module.css";

function Estrelas({ quantidade = 5 }) {
  return (
    <div className={styles.estrelas}>
      {Array.from({ length: quantidade }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="18" height="18" fill="#f5b301">
          <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      ))}
    </div>
  );
}

function Coracao({ ativo }) {
  const cor = ativo ? "#d9363e" : "#111";
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill={ativo ? cor : "none"}
      stroke={cor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

function ProdutoTopo({ produto }) {
  const [atual, setAtual] = useState(0);
  const [favorito, setFavorito] = useState(false);

  return (
    <div className={styles.topo}>
      {/* GALERIA */}
      <section className={styles.galeria}>
        <img className={styles.principal} src={produto.imagens[atual]} alt={produto.nome} />

        <div className={styles.miniaturas}>
          {produto.imagens.map((src, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.miniatura} ${i === atual ? styles.ativa : ""}`}
              onClick={() => setAtual(i)}
              aria-label={`Ver imagem ${i + 1}`}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      </section>

      {/* DETALHES */}
      <section className={styles.detalhes}>
        <span className={styles.tag}>{produto.categoria}</span>
        <h1>{produto.nome}</h1>

        <div className={styles.avaliacao}>
          <Estrelas />
          <strong>{produto.nota}</strong>
          <span className={styles.cinza}>({produto.avaliacoes} avaliações)</span>
        </div>

        <div className={styles.preco}>
          <strong>{produto.preco}</strong>
          <span className={styles.cinza}>{produto.unidade}</span>
        </div>

        <p className={styles.descricao}>{produto.descricao}</p>

        <dl className={styles.resumo}>
          <dt>Subtotal:</dt>
          <dd><strong>{produto.preco}</strong></dd>

          <dt>Para retirada</dt>
          <dd>
            {produto.retirada}
            <span className={styles.alerta}></span>
          </dd>
        </dl>

        <div className={styles.acoes}>
          <button type="button" className={styles.carrinho}>Adicionar ao carrinho</button>
        </div>
      </section>
    </div>
  );
}

export default ProdutoTopo;