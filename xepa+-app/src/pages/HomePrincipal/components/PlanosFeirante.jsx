import "../css/PlanosFeirante.css";

const PLANOS = [
  {
    id: "gratis",
    nome: "Plano Grátis",
    preco: "R$ 0",
    descricao:
      "Ideal para quem está começando agora e quer dar os primeiros passos sem nenhum investimento inicial.",
    beneficios: [
      "Taxa por venda: 10%",
      "Cadastro da barraca e do feirante",
      "Perfil básico na plataforma",
      "Acesso às funcionalidades essenciais",
    ],
  },
  {
    id: "crescer",
    nome: "Plano Crescer",
    preco: "R$ 29,90",
    descricao:
      "Perfeito para negócios em expansão que precisam de mais flexibilidade e recursos avançados.",
    beneficios: [
      "Taxa por venda: 8%",
      "Criação de promoções e ofertas",
      "Histórico de pedidos e vendas",
      "Resumo simples do desempenho das vendas",
    ],
  },
  {
    id: "pro",
    nome: "Plano Pro",
    preco: "R$ 59,90",
    descricao:
      "A solução completa para feirante que busca alta performance, controle total e máxima produtividade.",
    beneficios: [
      "Taxa por venda: 5%",
      "Painel de vendas e gestão",
      "Gráficos de faturamento por período",
      "Suporte prioritário",
    ],
  },
];

export default function PlanosFeirante({ onComprar }) {
  return (
    <section className="planos-feirante" aria-labelledby="planos-titulo">
      <div className="planos-conteudo">
        <h2 id="planos-titulo" className="planos-titulo">
          Feirante, veja nossos Planos
        </h2>

        <div className="planos-lista">
          {PLANOS.map((plano) => (
            <article
              key={plano.id}
              className={`plano-card plano-card--${plano.id}`}
            >
              <h3 className="plano-nome">{plano.nome}</h3>

              <div className="plano-corpo">
                <p className="plano-preco">{plano.preco}</p>
                <p className="plano-descricao">{plano.descricao}</p>

                <ul className="plano-beneficios">
                  {plano.beneficios.map((beneficio) => (
                    <li key={beneficio}>{beneficio}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="plano-botao"
                  onClick={() => onComprar?.(plano.id)}
                >
                  Comprar Plano
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}