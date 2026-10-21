import Styles from './Css/Header.module.css'
import Image from '../../Assets/img/logo.png'

function Header() {
  return (
    
    <div className={Styles.cabeçalho}>
        <div className={Styles.logo_cabeçalho}>
            <img src={Image} alt="Logo da empresa Xepa mais" />
        </div>
         <div className={Styles.button_cabecalho}>
            <button className={Styles.button_cabecalho1}>Voltar</button>
         </div>
    </div>
  )
}

export default Header