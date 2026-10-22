import React, { useState } from 'react';
import styles from '../css/Home.module.css';

export function SecaoTres() {
 const lidarComClique = () => {
    alert("Detalhes clicados!");
  };

  return (
        <section className={styles.secaocards}>
      <div className={styles.tituloxepa}>
        <h2>Xepas Completas</h2>
      </div>

      <div className={styles.card}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvZ24jCcZdRMOB2MhFenP1XVYEJx7sXYjX_Qu2CXe01oUlcoA" 
          alt="" 
          className={styles.cardImg} 
        />
        
        <div className={styles.cardConteudo}>
          <h3 className={styles.cardTitulo}>Título da Xepa</h3>
          <p className={styles.cardDescricao}>
           Xepas completas com verduras e legumes
          </p>
          <button 
            className={styles.cardBtn} 
            onClick={lidarComClique}
          >
            Ver mais detalhes
          </button>
        </div>
      </div>


      
    </section>
  );
}