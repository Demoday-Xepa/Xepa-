import FormularioFeira from "./FormularioFeira.jsx";
import styles from "../estilos/PopUpAdicionarFeira.module.css";

function PopUpAdicionarFeira({ aberto, onFechar, onSalvar }) {
  if (!aberto) return null;

  return (
    <FormularioFeira
      styles={styles}
      modo="adicionar"
      onFechar={onFechar}
      onSalvar={onSalvar}
    />
  );
}

export default PopUpAdicionarFeira;
