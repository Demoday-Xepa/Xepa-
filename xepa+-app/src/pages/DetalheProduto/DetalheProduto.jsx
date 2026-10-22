import { useState } from "react";
import styles from "./css/DetalheProduto.module.css";

function DetalheProduto({ imagens }) {
  const [atual, setAtual] = useState(0);

  return (
    <section className={styles.galeria}>
      <img className={styles.principal} src={imagens[atual]} alt="Produto Xepa" />

      <div className={styles.miniaturas}>
        {imagens.map((src, i) => (
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
  );
}

export default DetalheProduto;