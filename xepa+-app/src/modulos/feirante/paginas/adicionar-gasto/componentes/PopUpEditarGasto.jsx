import FormularioGasto from "./FormularioGasto.jsx";
import styles from "../estilos/PopUpGasto.module.css";

function PopUpEditarGasto({ aberto, gasto, onFechar, onSalvar }) {
  if (!aberto) return null;

  return (
    <FormularioGasto
      styles={styles}
      modo="editar"
      gasto={gasto}
      onFechar={onFechar}
      onSalvar={onSalvar}
    />
  );
}

export default PopUpEditarGasto;
