import React, { useState } from 'react';

import styles from '../css/Home.module.css';

export function SecaoDois() {
     const [ImagemFeira, setImagemFeira] = useState("https://conteudo.solutudo.com.br/wp-content/uploads/2022/04/feiratatuape.jpg");
  return (
    <section className={styles.secaoContainer}>
      <div className={styles.cardBanner}>
        
        <div className={styles.conteudoEsquerda}>
          <h1 className={styles.titulo}>
            Confira as feiras <br /> perto da sua casa !
          </h1>
          <p className={styles.subtitulo}>
            xepas fresquinhas dos feirantes perto de você, antes da feira fechar !
          </p>
          
          <div className={styles.buscaContainer}>
            <input 
              type="text" 
              placeholder="Pesquisar feira..." 
              className={styles.inputBusca}
            />
            <button className={styles.botaoVer}>
              Ver xepas perto
            </button>
          </div>
        </div>

        <div className={styles.conteudoDireita}>
            <img src={ImagemFeira} alt="Imagem da feira" className={styles.imagemFeira} />
        </div>

      </div>
    </section>
  );
}