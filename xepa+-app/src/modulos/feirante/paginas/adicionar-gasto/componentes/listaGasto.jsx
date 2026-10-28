import Styles from "../estilos/listaGasto.module.css";
import ImageGastos from '@/assets/imagens/gerais/GastosImage.png'

function ListaGasto({ total = "110,00", onAdicionar }) {
  return (
    <section className={Styles.containerResumo}>
      
      <div className={Styles.conteudoEsquerda}>
        <h1 className={Styles.titulo}>Quanto você gastou?</h1>
        <p className={Styles.subtitulo}>
          Cadastre e gerencie o histórico de gastos e tenha <br />
          maior controle sobre sua receita!
        </p>

        <div className={Styles.areaAcoes}>
          <div className={Styles.cartaoTotal}>
            <span className={Styles.labelTotal}>Total do dia</span>
            <strong className={Styles.valorTotal}>R$ {total}</strong>
          </div>
          
    <button type="button" className={Styles.btnAdicionar} onClick={onAdicionar}>
    + Adicionar Gasto
  </button>
        </div>
      </div>

      <div className={Styles.imagemDireita}>

        <img 
          src={ImageGastos}
          alt="Ilustração de frutas saudáveis" 
          className={Styles.frutasImg}
        />
      </div>

    </section>
  );
}

export default ListaGasto;