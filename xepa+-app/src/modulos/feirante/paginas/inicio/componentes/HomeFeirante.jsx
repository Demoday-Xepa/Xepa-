
import { useNavigate } from 'react-router-dom';
import Styles from '@/modulos/feirante/paginas/inicio/componentes/estilos/HomeFeirante.module.css';
import Image1 from '@/assets/imagens/feirante/xepaf.png';
import Image2 from '@/assets/imagens/marca/ia.png';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={Styles.pagina}>
      <main className={Styles.dashboard}>
        <h1 className={Styles.titulo}>
          Seja bem-vinda <br />
          Fabiane Carneiro
        </h1>

        <nav className={Styles.topo}>
          <div className={Styles.buscaWrapper}>
            <span className={Styles.lupa} aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </span>

            <input
              type="text"
              className={Styles.busca}
              placeholder="Buscar..."
            />
          </div>

          <button
            type="button"
            className={Styles.btnMenu}
            onClick={() => navigate('/adicionar-produto')}
          >
            Produtos
          </button>

          <button
            type="button"
            className={Styles.btnMenu}
            onClick={() => navigate('/financeiro')}
          >
            Vendas
          </button>

          <button
            type="button"
            className={Styles.btnMenu}
            onClick={() => navigate('/chat-feirante')}
          >
            Chat
          </button>

          <button
            type="button"
            className={Styles.btnMenu}
            onClick={() => navigate('/chat-ia')}
          >
            XepAI
          </button>
        </nav>

        <div className={Styles.grid}>
          <section className={`${Styles.card} ${Styles.cardXepa}`}>
            <div className={Styles.xepaImagem}>
              <img src={Image1} alt="Produtos da Xepa+" />
            </div>

            <div className={Styles.xepaInfo}>
              <h2>Xepa De Poa</h2>
              <small>
                Conheça seus produtos e acompanhe sua feira.
              </small>

              <p>
                Gerencie seus produtos e aproveite a plataforma Xepa+ para
                divulgar suas ofertas e acompanhar suas vendas.
              </p>

              <button
                type="button"
                className={Styles.btnBranco}
                onClick={() => navigate('/adicionar-produto')}
              >
                Adicionar novo produto{' '}
                <span className={Styles.seta}>↗</span>
              </button>
            </div>
          </section>

          <section className={`${Styles.card} ${Styles.cardFinancas}`}>
            <h2>Finanças</h2>
            <p className={Styles.ganhosLabel}>Ganhos da feira passada</p>
            <p className={Styles.ganhosValor}>R$ 2.000</p>

            <div className={Styles.ganhosCaixas}>
              <div className={Styles.caixaGanho}>
                <span>Ganho Bruto mensal</span>
                <strong>R$ 9.000</strong>
              </div>

              <div className={Styles.caixaGanho}>
                <span>Ganho Líquido mensal</span>
                <strong>R$ 4.500</strong>
              </div>
            </div>

            <button
              type="button"
              className={Styles.btnBranco}
              onClick={() => navigate('/financeiro')}
            >
              Ver financeiro <span className={Styles.seta}>↗</span>
            </button>
          </section>

          <section className={`${Styles.card} ${Styles.cardBranco}`}>
            <div className={Styles.cardHeader}>
              <h2>Gastos</h2>

              <button
                type="button"
                className={Styles.seta}
                onClick={() => navigate('/financeiro')}
                aria-label="Ver financeiro"
              >
                ↗
              </button>
            </div>

            <div className={Styles.graficoPizza}></div>

            <ul className={Styles.legenda}>
              <li>
                <span className={`${Styles.cor} ${Styles.corMensal}`}></span>
                Ganho mensal
              </li>

              <li>
                <span className={`${Styles.cor} ${Styles.corSemanal}`}></span>
                Ganho semanal
              </li>

              <li>
                <span className={`${Styles.cor} ${Styles.corDiario}`}></span>
                Ganho diário
              </li>

              <li>
                <span className={`${Styles.cor} ${Styles.corGasto}`}></span>
                Gasto
              </li>
            </ul>
          </section>

          <section className={`${Styles.card} ${Styles.cardBranco}`}>
            <div className={Styles.cardHeader}>
              <h2>Notificações</h2>

              <button
                type="button"
                className={Styles.seta}
                onClick={() => navigate('/chat-feirante')}
                aria-label="Abrir chat"
              >
                ↗
              </button>
            </div>

            {[1, 2, 3, 4].map((item) => (
              <div className={Styles.notificacao} key={item}>
                <div className={Styles.notificacaoFoto}></div>

                <div className={Styles.notificacaoTexto}>
                  <strong>Lorem ipsum dolor sim</strong>
                  <small>Lorem ipsum dolor sim</small>
                </div>

                <small>Lorem ipsum</small>
              </div>
            ))}
          </section>

          <section className={`${Styles.card} ${Styles.cardAi}`}>
            <h2>Xep.AI</h2>

            <div className={Styles.aiImagem}>
              <img src={Image2} alt="Assistente virtual Xepinha" />
            </div>

            <p>
              Tem alguma dúvida de como usar o Xepa+? Chame o Xepinha para
              te ajudar.
            </p>

            <button
              type="button"
              className={`${Styles.btnBranco} ${Styles.btnCentro}`}
              onClick={() => navigate('/chat-ia')}
            >
              Falar com o Xepinha
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
