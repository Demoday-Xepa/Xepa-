import FormularioGasto from "./FormularioGasto.jsx";
import styles from "../estilos/PopUpGasto.module.css";

function PopUpAdicionarGasto({ aberto, onFechar, onSalvar }) {
  if (!aberto) return null;

  return (
    <FormularioGasto
      styles={styles}
      modo="adicionar"
      onFechar={onFechar}
      onSalvar={onSalvar}
    />
  );
}

export default PopUpAdicionarGasto;
