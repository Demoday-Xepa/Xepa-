import React from 'react';
import styles from '@/modulos/usuario/paginas/inicio/estilos/Home.module.css';


export function SecaoTres() {
  const lidarComClique = (nomeXepa) => {
    alert(`Ver mais detalhes: ${nomeXepa}`);
  };

  return (
    <section className={styles.secaoXepasPerto}>
      <div className={styles.tituloXepas}>
        <h2>Feiras perto de você</h2>
      </div>

      <div className={styles.containerCardsXepas}>
        <div className={styles.cardHorizontalXepa}>
          <img 
            src="https://via.placeholder.com/150" 
            alt="Xepa Completa" 
            className={styles.imgCardXepa} 
          />
          <div className={styles.conteudoCardXepa}>
            <h3 className={styles.tituloCardXepa}>Xepa da Brasilândia</h3>
            <p className={styles.descricaoCardXepa}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nisi accusantium natus, tempore minus laudantium similique numquam repudiandae recusandae harum ducimus corrupti. Dolor quam omnis nam dolores, assumenda neque placeat!
            </p>
            <button 
              className={styles.botaoCardXepa} 
              onClick={() => lidarComClique("Xepa da Brasilândia")}
            >
            Ver no Mapa
            </button>
          </div>
        </div>

        <div className={styles.cardHorizontalXepa}>
          <img 
            src="https://via.placeholder.com/150" 
            alt="Xepa Completa" 
            className={styles.imgCardXepa} 
          />
          <div className={styles.conteudoCardXepa}>
            <h3 className={styles.tituloCardXepa}>Xepa Morro Grande</h3>
            <p className={styles.descricaoCardXepa}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nisi accusantium natus, tempore minus laudantium similique numquam repudiandae recusandae harum ducimus corrupti. Dolor quam omnis nam dolores, assumenda neque placeat!
            </p>
            <button 
              className={styles.botaoCardXepa} 
              onClick={() => lidarComClique("Xepa Morro Grande")}
            >
            Ver no Mapa
            </button>
          </div>
        </div>  
      </div>
    </section>
  );
}