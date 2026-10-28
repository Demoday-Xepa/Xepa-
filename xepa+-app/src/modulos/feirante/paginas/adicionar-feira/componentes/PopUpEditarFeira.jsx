import FormularioFeira from "./FormularioFeira.jsx";
import styles from "../estilos/PopUpEditarFeira.module.css";

function PopUpEditarFeira({ aberto, feira, onFechar, onSalvar }) {
  if (!aberto) return null;

  return (
    <FormularioFeira
      styles={styles}
      modo="editar"
      feira={feira}
      onFechar={onFechar}
      onSalvar={onSalvar}
    />
  );
}

export default PopUpEditarFeira;
