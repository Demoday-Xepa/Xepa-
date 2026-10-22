import Styles from './Css/HomeFeirante.module.css'
import Image1 from '../../../Assets/img/XepaF.png'
import Image2 from '../../../Assets/img/Ia.png'
import Image3 from '../../../Assets/img/LogoB.png'


function Dashboard() {
  return (
    <div className={Styles.pagina}>
      <main className={Styles.dashboard}>

        <h1 className={Styles.titulo}>
          Seja bem vinda <br />
          Fabiane Carneiro
        </h1>

        <nav className={Styles.topo}>
          <div className={Styles.buscaWrapper}>
            <span className={Styles.lupa} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </span>
            <input type="text" className={Styles.busca} placeholder="Buscar..." />
          </div>
          <button type="button" className={Styles.btnMenu}>Produtos</button>
          <button type="button" className={Styles.btnMenu}>Vendas</button>
          <button type="button" className={Styles.btnMenu}>Chat</button>
          <button type="button" className={Styles.btnMenu}>XepAI</button>
        </nav>

        <div className={Styles.grid}>

          <section className={`${Styles.card} ${Styles.cardXepa}`}>
            <div className={Styles.xepaImagem}>
              <img src={Image1} alt="Produto" />
            </div>

            <div className={Styles.xepaInfo}>
              <h2>Xepa De Poa</h2>
              <small>Lorem ipsum dolor sit amet, consectetur adipiscing.</small>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                Duis aut
              </p>
              <button type="button" className={Styles.btnBranco}>
                Adicionar novo produto <span className={Styles.seta}>↗</span>
              </button>
            </div>
          </section>

          <section className={`${Styles.card} ${Styles.cardFinancas}`}>
            <h2>Finanças</h2>
            <p className={Styles.ganhosLabel}>Ganhos da feira passada</p>
            <p className={Styles.ganhosValor}>R$2,000</p>

            <div className={Styles.ganhosCaixas}>
              <div className={Styles.caixaGanho}>
                <span>Ganho Bruto mensal</span>
                <strong>R$ 9000</strong>
              </div>
              <div className={Styles.caixaGanho}>
                <span>Ganho Líquido mensal</span>
                <strong>R$ 4500</strong>
              </div>
            </div>
          </section>

          <section className={`${Styles.card} ${Styles.cardBranco}`}>
            <div className={Styles.cardHeader}>
              <h2>Gastos</h2>
              <span className={Styles.seta}>↗</span>
            </div>

            <div className={Styles.graficoPizza}></div>

            <ul className={Styles.legenda}>
              <li><span className={`${Styles.cor} ${Styles.corMensal}`}></span> Ganho mensal</li>
              <li><span className={`${Styles.cor} ${Styles.corSemanal}`}></span> Ganho semanal</li>
              <li><span className={`${Styles.cor} ${Styles.corDiario}`}></span> Ganho diario</li>
              <li><span className={`${Styles.cor} ${Styles.corGasto}`}></span> Gasto</li>
            </ul>
          </section>

          <section className={`${Styles.card} ${Styles.cardBranco}`}>
            <div className={Styles.cardHeader}>
              <h2>Notificações</h2>
              <span className={Styles.seta}>↗</span>
            </div>

            <div className={Styles.notificacao}>
              <div className={Styles.notificacaoFoto}></div>
              <div className={Styles.notificacaoTexto}>
                <strong>Lorem ipsum dolor sim</strong>
                <small>Lorem ipsum dolor sim</small>
              </div>
              <small>Lorem ipsum</small>
            </div>

            <div className={Styles.notificacao}>
              <div className={Styles.notificacaoFoto}></div>
              <div className={Styles.notificacaoTexto}>
                <strong>Lorem ipsum dolor sim</strong>
                <small>Lorem ipsum dolor sim</small>
              </div>
              <small>Lorem ipsum</small>
            </div>

            <div className={Styles.notificacao}>
              <div className={Styles.notificacaoFoto}></div>
              <div className={Styles.notificacaoTexto}>
                <strong>Lorem ipsum dolor sim</strong>
                <small>Lorem ipsum dolor sim</small>
              </div>
              <small>Lorem ipsum</small>
            </div>

            <div className={Styles.notificacao}>
              <div className={Styles.notificacaoFoto}></div>
              <div className={Styles.notificacaoTexto}>
                <strong>Lorem ipsum dolor sim</strong>
                <small>Lorem ipsum dolor sim</small>
              </div>
              <small>Lorem ipsum</small>
            </div>
          </section>

          <section className={`${Styles.card} ${Styles.cardAi}`}>
            <h2>Xep.AI</h2>

            <div className={Styles.aiImagem}>
              <img src={Image2} alt="Xepinha" />
            </div>

            <p>
              Tem alguma duvida de como usar o Xepa+? Chame o Xepinha para te
              ajudar
            </p>
            <button type="button" className={`${Styles.btnBranco} ${Styles.btnCentro}`}>
              Falar com o Xepinha
            </button>
          </section>

        </div>
      </main>

      <footer className={Styles.footer}>
        <div className={Styles.rodapeTopo}>

          <div className={Styles.marca}>
            <div className={Styles.logo}>
              <img src={Image3} alt="" />
              <span>Xepa+</span>
            </div>

            <p className={Styles.descricao}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullam.
            </p>

            <div className={Styles.redes}>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M14 8V6.5c0-.7.3-1 1-1h2V2h-3c-3 0-4.5 1.8-4.5 4.4V8H7v3.5h2.5V22H14V11.5h2.8L17.3 8H14z" /></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.3 5.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 2c-2.7 0-3 0-4.1.1-3 .1-4.7 1.8-4.8 4.8C3 8 3 8.3 3 12s0 4 .1 5.1c.1 3 1.8 4.7 4.8 4.8C9 22 9.3 22 12 22s3 0 4.1-.1c3-.1 4.7-1.8 4.8-4.8.1-1.1.1-1.4.1-5.1s0-4-.1-5.1c-.1-3-1.8-4.7-4.8-4.8C15 2 14.7 2 12 2zm0 1.8c2.7 0 3 0 4 .1 2.2.1 3.2 1.1 3.3 3.3.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.2-1.1 3.2-3.3 3.3-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.2-.1-3.2-1.1-3.3-3.3-.1-1-.1-1.3-.1-4s0-3 .1-4C4.8 5 5.8 4 8 3.9c1-.1 1.3-.1 4-.1z" /></svg>
              </a>
              <a href="#" aria-label="X / Twitter">
                <svg viewBox="0 0 24 24"><path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7C8.5 8.8 5.4 7.1 3.4 4.6c-1.1 1.9-.5 4.2 1.2 5.4-.7 0-1.3-.2-1.8-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.9A8.2 8.2 0 012 18.3 11.6 11.6 0 008.3 20c7.5 0 11.7-6.3 11.4-12 .8-.6 1.5-1.3 2-2.1z" /></svg>
              </a>
            </div>
          </div>

          <nav className={Styles.colunas} aria-label="Links do rodapé">
            <div className={Styles.coluna}>
              <h3>Tecnologias e IA</h3>
              <ul>
                <li><a href="#">Assistente virtual</a></li>
                <li><a href="#">Contato e suporte</a></li>
              </ul>
            </div>

            <div className={Styles.coluna}>
              <h3>Para vender</h3>
              <ul>
                <li><a href="#">Seja um feirante parceiro</a></li>
                <li><a href="#">Cadastrar minha barraca</a></li>
              </ul>
            </div>

            <div className={Styles.coluna}>
              <h3>Home page</h3>
              <ul>
                <li><a href="#">Quem somos</a></li>
                <li><a href="#">Como funciona</a></li>
                <li><a href="#">O que você vai receber</a></li>
                <li className={Styles.espaco}><a href="#">Planos</a></li>
                <li><a href="#">Mapas das feiras</a></li>
              </ul>
            </div>
          </nav>

        </div>

        <div className={Styles.base}>
          <span>© 2026 Xepa+ Todos os direitos reservados.</span>
          <div className={Styles.legal}>
            <a href="#">Termos de uso</a>
            <a href="#">Diretrizes de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard