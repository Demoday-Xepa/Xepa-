import Styles from '../css/Cozy.module.css';
import Caldo from '../../../imgs/caldo-abobora.jpg';




function Cozy() {
  return (
  
    <section className={Styles.cozyMain}>
      <div>
        <h1>O que cozinhar com sua Xepa?</h1>
        <p>Receitas com os itens que você comprou</p>
      </div>

      <div className={Styles.cardReceita}>
        <div className={Styles.imagemReceita}>
          <img src={Caldo} alt="Tigela de caldo de abóbora" />
        </div>
        <div className={Styles.txtCard}>
          <h2>Sopa de legumes e verduras</h2>
        <div className={Styles.tempo}>
            <div >
              <p>45 min</p>
            </div>
             <div>
                <p>Serve: 3</p>
              </div>
        </div>
          <div className={Styles.textpadrao}>
            
            <p>Feito com ingredientes frescos da feira para o seu prato.</p>
          </div>
          <div className={Styles.ia}>
            <h2>Adaptar com IA</h2>
          </div>
        </div>
      </div>
<div className={Styles.quadro}>
      <div className={Styles.ing}>
        <h2>Ingredientes</h2>
        <p>Marque os ingredientes que você já tem:</p>
        <form>
          <label>
            <input type="checkbox" name="ingredientes" value="abobora" />
            1 Batata
          </label>
          <label>
            <input type="checkbox" name="ingredientes" value="cebola" />
            Óleo
          </label>
          <label>
            <input type="checkbox" name="ingredientes" value="alho" />
            1 Cheiro-verde
          </label>
          <label>
            <input type="checkbox" name="ingredientes" value="azeite" />
            1 Cenoura
          </label>
          <label>
            <input type="checkbox" name="ingredientes" value="sal" />
            Temperos-a-gosto
          </label>
        </form>
      </div>
      <div className={Styles.preparo}>
        <h2>Modo de Preparo</h2>
    <div className={Styles.grupEta}>
      <div className={Styles.etapas}>
        <div className={Styles.circule}>1</div>
        <p>Corte os legumes e verduras</p>
        </div>
      <div className={Styles.etapas}>
         <div className={Styles.circule}>2</div>
         <p>Refogue os legumes</p>
         </div>
      <div className={Styles.etapas}>
          <div className={Styles.circule}>3</div>
          <div><p>Tempere a gosto</p></div>
          </div>
      <div className={Styles.etapas}>
           <div className={Styles.circule}>4</div>
           <p>Cozinhe</p>
          </div>
      <div className={Styles.etapas}>
            <div className={Styles.circule}>5</div>
            <p>Finalize</p>
            </div>
      </div>

      </div>
    </div>
    </section>
  );
}

export default Cozy;