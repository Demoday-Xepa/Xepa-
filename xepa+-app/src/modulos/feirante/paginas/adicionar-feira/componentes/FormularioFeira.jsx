import { useEffect, useState } from "react";
import pinIcon from "@/assets/imagens/gerais/PinIcon.png";

const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function FormularioFeira({ styles, modo, feira, onFechar, onSalvar }) {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [dias, setDias] = useState([]);
  const [funcionarios, setFuncionarios] = useState([""]);
  const estaEditando = modo === "editar";

  useEffect(() => {
    setNome(feira?.nome ?? "");
    setEndereco(feira?.endereco ?? "");
    setDias(feira?.dias ?? []);
    setFuncionarios(feira?.funcionarios?.length ? feira.funcionarios : [""]);
  }, [feira]);

  useEffect(() => {
    const aoApertar = (evento) => evento.key === "Escape" && onFechar();
    window.addEventListener("keydown", aoApertar);
    return () => window.removeEventListener("keydown", aoApertar);
  }, [onFechar]);

  function salvar(evento) {
    evento.preventDefault();
    onSalvar({
      nome: nome.trim(),
      endereco: endereco.trim(),
      dias,
      funcionarios: funcionarios.map((funcionario) => funcionario.trim()).filter(Boolean),
    });
  }

  function alternarDia(dia) {
    setDias((atuais) => atuais.includes(dia)
      ? atuais.filter((item) => item !== dia)
      : [...atuais, dia]);
  }

  return (
    <div className={styles.fundo} onClick={onFechar}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tituloModalFeira"
        onClick={(evento) => evento.stopPropagation()}
      >
        <div className={styles.topo}>
          <h2 id="tituloModalFeira">{estaEditando ? "Editar Feira" : "Adicionar Feira"}</h2>
        </div>

        <form className={styles.form} onSubmit={salvar}>
          <div className={styles.campo}>
            <label htmlFor="nomeFeira">Nome da Feira</label>
            <input id="nomeFeira" name="nome" value={nome} onChange={(evento) => setNome(evento.target.value)} placeholder="Fazendinha" required />
          </div>

          <div className={styles.campo}>
            <label htmlFor="enderecoFeira">Endereço</label>
            <input id="enderecoFeira" name="endereco" value={endereco} onChange={(evento) => setEndereco(evento.target.value)} placeholder="Rua João 123" required />
          </div>

          <fieldset className={styles.selecaoDias}>
            <legend>Dias que você trabalha</legend>
            <div className={styles.dias}>
              {diasDaSemana.map((dia) => (
                <button
                  key={dia}
                  type="button"
                  aria-pressed={dias.includes(dia)}
                  className={dias.includes(dia) ? styles.diaSelecionado : styles.dia}
                  onClick={() => alternarDia(dia)}
                >
                  {dia}
                </button>
              ))}
            </div>
          </fieldset>

          {funcionarios.map((funcionario, indice) => (
            <div className={styles.campo} key={indice}>
              <label htmlFor={`func${indice}`}>Funcionário{indice > 0 ? ` ${indice + 1}` : ""}</label>
              <div className={styles.campoComIcone}>
                <input
                  id={`func${indice}`}
                  name="funcionario"
                  value={funcionario}
                  onChange={(evento) => setFuncionarios((atuais) => atuais.map((item, i) => i === indice ? evento.target.value : item))}
                  placeholder="Escreva aqui..."
                  required={indice === 0}
                />
                {estaEditando && <img src={pinIcon} alt="" aria-hidden="true" />}
              </div>
            </div>
          ))}

          <button type="button" className={styles.secundario} onClick={() => setFuncionarios((atuais) => [...atuais, ""])}>
            Cadastrar outro funcionário
          </button>
          <button type="submit" className={styles.principal}>
            {estaEditando ? "Salvar" : "Registrar Feira"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioFeira;
