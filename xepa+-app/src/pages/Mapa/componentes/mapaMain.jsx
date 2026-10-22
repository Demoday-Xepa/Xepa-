import Styles from '../css/Mapa.module.css';

function MapaMain() {
  return (
    <section className={Styles.mapaMain}>
     
        <iframe src="https://www.google.com/maps/d/embed?mid=1d-7JMPMsKvt1SnRDneFnHVwxx4EWAnU&ehbc=2E312F"></iframe>

      <aside className={Styles.cardLateral}>
        <div className={Styles.cardTitle}>
          <h1>Encontre a feira mais próxima de você</h1>
        </div>
        
        <div className={Styles.fundoSection}>
            <div className={Styles.search}>Busca:</div>
            <div className={Styles.conteudo}>
          <p>Explore o mapa e selecione uma feira para ver sua localização.</p>
          </div>
          <div className={Styles.conteudotwo}></div>
           <div className={Styles.conteudothree}></div>
        
        </div>
      </aside>
    </section>
  );
}

export default MapaMain;
