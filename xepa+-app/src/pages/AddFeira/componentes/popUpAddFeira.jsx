import { useState, useEffect } from "react";
import styles from "../css/popUpAddFeira.module.css";

function PopUpAddFeira({ aberto, onFechar }) {
  const [funcionarios, setFuncionarios] = useState([0]);

  useEffect(() => {
    if (!aberto) return;
    const aoApertar = (e) => e.key === "Escape" && onFechar();
    window.addEventListener("keydown", aoApertar);
    return () => window.removeEventListener("keydown", aoApertar);
  }, [aberto, onFechar]);

  if (!aberto) return null;

  function fechar() {
    setFuncionarios([0]);
    onFechar();
  }

  function registrarFeira(event) {
    event.preventDefault();
    alert("Estrutura do formulário pronta!");
    fechar();
  }

  return (
    <div className={styles.fundo} onClick={fechar}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tituloModal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.topo}>
          <h2 id="tituloModal">Adicionar Feira</h2>
          <button type="button" onClick={fechar} aria-label="Fechar">×</button>
        </div>

        <form className={styles.form} onSubmit={registrarFeira}>
          <div className={styles.linha}>
            <div className={styles.campo}>
              <label htmlFor="nomeFeira">Nome da feira</label>
              <input id="nomeFeira" name="nome" placeholder="Ex: Feira da Lapa" required />
            </div>
            <div className={styles.campo}>
              <label htmlFor="enderecoFeira">Endereço</label>
              <input id="enderecoFeira" name="endereco" placeholder="Rua, número" required />
            </div>
          </div>

          <div className={styles.campo}>
            <label htmlFor="diaFeira">Dia</label>
            <input id="diaFeira" name="dia" placeholder="Ex: Terças e Quintas" required />
          </div>

          {funcionarios.map((id, i) => (
            <div className={styles.campo} key={id}>
              <label htmlFor={`func${id}`}>Funcionário</label>
              <input id={`func${id}`} name="funcionario" placeholder="Escreva aqui..." required={i === 0} />
            </div>
          ))}

          <button
            type="button"
            className={styles.secundario}
            onClick={() => setFuncionarios([...funcionarios, funcionarios.length])}
          >
            Cadastrar outro funcionário
          </button>

          <button type="submit" className={styles.principal}>
            Registrar Feira
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopUpAddFeira;