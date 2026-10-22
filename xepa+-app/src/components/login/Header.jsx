import { useNavigate } from 'react-router-dom'
import Styles from './Css/Header.module.css'
import Logo from '../../Assets/img/logo.png'

function Header() {
    const navigate = useNavigate()

  console.log('HEADER NOVO CARREGADO')

  return (
    <header className={Styles.cabecalho}>
      <div className={Styles.logo}>
        <img src={Logo} alt="Logo da empresa Xepa mais" />
      </div>

      <button
        type="button"
        className={Styles.btnVoltar}
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
    </header>
  )
}

export default Header