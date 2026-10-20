import Styles from './css/Mapa.module.css'
import Logo from '../../imgs/logoPreta.png'

function Mapamain (){
    return(
        <section className={Styles.mapaMain}>
           <iframe src="https://www.google.com/maps/d/embed?mid=1d-7JMPMsKvt1SnRDneFnHVwxx4EWAnU&ehbc=2E312F" width="100%" height="870" ></iframe>
            <aside className={Styles.cardLateral}>   
                <div className={Styles.cardTitle}>
                    <h1>Encontre a feira mais próximas de você</h1>
                </div>
                    <div className={Styles.cardsection}>
                        <div className={Styles.titleIn}><img src={Logo} alt="" /> 
                        <div className={Styles.textTitle}>
                            <h1>Feira do Produtor Orgânico (Parque da Água Branca) </h1>
                            <p>
                                Onde: Parque da Água Branca (Av. Francisco Matarazzo, 455)
                             </p>
                            </div>
                           
                        </div>
                    </div>
            </aside>




        </section>
    )
}
export default Mapamain