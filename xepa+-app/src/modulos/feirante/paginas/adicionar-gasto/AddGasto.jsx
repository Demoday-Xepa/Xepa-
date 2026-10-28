import { useMemo, useRef, useState } from "react";
import ListaGasto from "@/modulos/feirante/paginas/adicionar-gasto/componentes/listaGasto.jsx";
import HistoricoGastos from "@/modulos/feirante/paginas/adicionar-gasto/componentes/resumoGasto.jsx";
import PopUpAdicionarGasto from "@/modulos/feirante/paginas/adicionar-gasto/componentes/PopUpAdicionarGasto.jsx";
import PopUpEditarGasto from "@/modulos/feirante/paginas/adicionar-gasto/componentes/PopUpEditarGasto.jsx";
import PopUpFiltroGastos from "@/modulos/feirante/paginas/adicionar-gasto/componentes/PopUpFiltroGastos.jsx";

// Dados de exemplo (Depois vou trocar pelos dados da API, so pra n esquecer)
const gastosIniciais = [
  { id: 1, descricao: "Compra de alface", quantidade: 10, valorUnitario: 3, categoria: "mercadoria", data: new Date() },
  { id: 2, descricao: "Ajudante 1 dia", quantidade: 1, valorUnitario: 80, categoria: "ajudantes", data: new Date() },
];

const filtrosVazios = { categoria: "", ordemQuantidade: "", ordemPreco: "" };

const ehHoje = (data) => new Date(data).toDateString() === new Date().toDateString();

function AddGasto() {
  const [gastos, setGastos] = useState(gastosIniciais);
  const [filtros, setFiltros] = useState(filtrosVazios);
  const [modal, setModal] = useState(null);
  const proximoId = useRef(gastosIniciais.length + 1);

  // "Total do dia" soma só os gastos de hoje
  const totalDoDia = useMemo(
    () =>
      gastos
        .filter((gasto) => ehHoje(gasto.data))
        .reduce((soma, gasto) => soma + gasto.quantidade * gasto.valorUnitario, 0),
    [gastos],
  );

  function adicionarGasto(dados, { continuar = false } = {}) {
    const id = proximoId.current++;
    // O formulário não tem campo de categoria, então novos gastos entram como "outros" depois mudar isso
    setGastos((atuais) => [{ id, categoria: "outros", data: new Date(), ...dados }, ...atuais]);
    if (!continuar) setModal(null);
  }

  function editarGasto(dados) {
    const id = modal.gasto.id;
    setGastos((atuais) => atuais.map((gasto) => (gasto.id === id ? { ...gasto, ...dados } : gasto)));
    setModal(null);
  }

  function aplicarFiltros(novosFiltros) {
    setFiltros(novosFiltros);
    setModal(null);
  }

  return (
 
    <div>

      <ListaGasto
        total={totalDoDia.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        onAdicionar={() => setModal({ tipo: "adicionar" })}
      />
      <HistoricoGastos
        gastos={gastos}
        filtros={filtros}
        onEditar={(gasto) => setModal({ tipo: "editar", gasto })}
        onFiltrar={() => setModal({ tipo: "filtrar" })}
      />

      <PopUpAdicionarGasto
        aberto={modal?.tipo === "adicionar"}
        onFechar={() => setModal(null)}
        onSalvar={adicionarGasto}
      />
      <PopUpEditarGasto
        aberto={modal?.tipo === "editar"}
        gasto={modal?.gasto}
        onFechar={() => setModal(null)}
        onSalvar={editarGasto}
      />
      <PopUpFiltroGastos
        aberto={modal?.tipo === "filtrar"}
        filtros={filtros}
        onFechar={() => setModal(null)}
        onAplicar={aplicarFiltros}
      />
    </div>
  );
}

export default AddGasto;
