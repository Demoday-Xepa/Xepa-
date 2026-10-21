import React, { useState } from 'react';
import styles from "../css/Impacto.module.css";
export function Dashboard() {

  const [pesoSalvo, setPesoSalvo] = useState("18,4");
  const [dinheiroEconomizado, setDinheiroEconomizado] = useState("142");
  const [xepasResgatadas, setXepasResgatadas] = useState("11");
  const [metaKg, setMetaKg] = useState("25");
  const [quantoFalta, setQuantoFalta] = useState("6,6");

       const [Legumes, setLegumes] = useState("https://i.pinimg.com/474x/31/c5/0c/31c50c14e9aa253a1eb6f460c53235ce.jpg?nii=t");
  


  const [semanas] = useState([
    { id: 1, altura: '50%', tipo: 'verde' },
    { id: 2, altura: '65%', tipo: 'laranja' },
    { id: 3, altura: '25%', tipo: 'verde' },
    { id: 4, altura: '90%', tipo: 'laranja' },
    { id: 5, altura: '70%', tipo: 'verde' },
  ]);

  return (
    <div className={styles.paginaContainer}>

      <main className={styles.conteudoPrincipal}>
  
        <div className={styles.linhaSuperior}>
          
        
          <div className={styles.cardPeso}>
            <div className={styles.textoPeso}>
              <span className={styles.subTituloCard}>você já salvou</span>
              <h2 className={styles.numeroDestaque}>{pesoSalvo} Kg</h2>
              <span className={styles.legendaCard}>de alimentos</span>
            </div>
            <div className={styles.containerImg}>
             
              <img src={Legumes} alt="Legumes" className={styles.imgVegetais} />
            </div>
          </div>

          <div className={styles.colunaDireita}>
            <div className={styles.linhaPequenaCards}>
              
             
              <div className={styles.cardInfo}>
                <span className={styles.valorDestaqueLaranja}>R$ {dinheiroEconomizado}</span>
                <span className={styles.rotuloCard}>economizados</span>
              </div>

             
              <div className={styles.cardInfo}>
                <span className={styles.valorDestaqueLaranja}>{xepasResgatadas}</span>
                <span className={styles.rotuloCard}>xepas resgatadas</span>
              </div>
            </div>

            
            <div className={styles.cardMeta}>
              <div className={styles.topoMeta}>
                <span>Próxima meta: {metaKg}Kg</span>
              </div>
              <div className={styles.barraFundo}>
                <div className={styles.barraProgresso} style={{ width: '73%' }}></div>
              </div>
              <span className={styles.faltaTexto}>faltam {quantoFalta}Kg</span>
            </div>
          </div>
        </div>

        <div className={styles.cardGrafico}>
          <h3 className={styles.tituloGrafico}>ULTIMAS 6 SEMANAS</h3>
          <div className={styles.graficoBarras}>
            {semanas.map((semana) => (
              <div 
                key={semana.id}
                className={semana.tipo === 'verde' ? styles.barraVerdeEscuro : styles.barraLaranja} 
                style={{ height: semana.altura }}
              ></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;