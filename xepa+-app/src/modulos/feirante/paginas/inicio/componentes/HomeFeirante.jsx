import { useNavigate } from 'react-router-dom';
import { Headset, Leaf, Store, UserRound } from 'lucide-react';
import Styles from '@/modulos/feirante/paginas/inicio/componentes/estilos/HomeFeirante.module.css';
import CestaXepa from '@/assets/imagens/gerais/xepaCompleta.jpg';
import Xepinha from '@/assets/imagens/marca/ia.png';
import Produto from '@/assets/imagens/marca/image.png';

const conversas = [
  {
    nome: 'Seu Zé - Feira Livre Centro',
    mensagem: 'Opa, Lucas! Já separei sua xepa. Pode passar na banca 24.',
    horario: 'Hoje, 10:24',
    Icone: UserRound,
    estilo: 'avatar_feirante',
  },
  {
    nome: 'Equipe Xepa+',
    mensagem: 'Sua compra foi confirmada! ✅',
    horario: 'Hoje, 09:48',
    Icone: Leaf,
    estilo: 'avatar_equipe',
  },
  {
    nome: 'Banca do Seu Zé',
    mensagem: 'Temos novas xepas disponíveis hoje!',
    horario: 'Hoje, 08:32',
    Icone: Store,
    estilo: 'avatar_banca',
  },
  {
    nome: 'Suporte Xepa+',
    mensagem: 'Qualquer dúvida, estamos por aqui! 🙂',
    horario: 'Ontem, 17:21',
    Icone: Headset,
    estilo: 'avatar_suporte',
  },
];

function HomeFeirante() {
  const navigate = useNavigate();

  return (
    <div className={Styles.pagina}>
      <main className={Styles.dashboard}>
        <section className={Styles.banner} aria-labelledby="banner-titulo">
          <div className={Styles.banner_foto}>
            <img src={CestaXepa} alt="Cesta com frutas e verduras frescas" />
          </div>

          <div className={Styles.banner_texto}>
            <span className={Styles.banner_marca}>Xepa Mais</span>
            <h1 id="banner-titulo">A feira que rende mais.</h1>
            <p>
              Com a Xepa.AI, você encontra as melhores ofertas da feira,
              economiza e ainda ajuda a reduzir o desperdício de alimentos.
            </p>
            <button
              type="button"
              className={Styles.botao_banner}
              onClick={() => navigate('/chat-ia-feirante')}
            >
              <span aria-hidden="true"></span>
              <span>Conheça a Xepa.AI</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className={Styles.banner_assistente}>
            <div className={Styles.assistente_marca}>
              <div>
                <strong>Xepinha</strong>
                <span>Seu assistente inteligente da feira!</span>
              </div>
            </div>

            <p>
              A Xepa.AI analisa os dados da feira, indica as melhores ofertas,
              te avisa sobre as xepas disponíveis e ajuda você a economizar de
              verdade.
            </p>

            <div className={Styles.beneficios}>
              <span>
                ◉
                <small>
                  Ofertas
                  <br />
                  personalizadas
                </small>
              </span>
              <span>
                ◉
                <small>
                  Menos
                  <br />
                  desperdício
                </small>
              </span>
              <span>
                ◉
                <small>
                  Mais
                  <br />
                  economia
                </small>
              </span>
            </div>
          </div>

          <img
            className={Styles.banner_xepinha}
            src={Xepinha}
            alt="Xepinha, assistente virtual da Xepa"
          />
        </section>

        <div className={Styles.grid}>
          <section className={Styles.card_destaque}>
            <div className={Styles.card_header}>
              <h2>Xepa em destaque</h2>
              <span className={Styles.controle}>›</span>
            </div>

            <div className={Styles.destaque_conteudo}>
              <div className={Styles.destaque_imagem}>
                <img src={Produto} alt="Xepinha, assistente da Xepa" />
              </div>

              <div className={Styles.destaque_info}>
                <strong>Xepa de Legumes e Verduras</strong>
                <p>
                  Produtos frescos e de ótima qualidade, com aquele preço
                  especial da feira!
                </p>
                <div className={Styles.preco}>
                  R$ 2,00 <span> 50% OFF</span>
                </div>
                <button
                  type="button"
                  className={Styles.botao_verde}
                  onClick={() => navigate('/adicionar-produto')}
                >
                  Ver detalhes <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </section>

           <section className={Styles.card_financas}>
            <h2>↗ &nbsp;Finanças</h2>
            <p>Ganhos da feira passada</p>
            <strong className={Styles.ganhos_valor}>R$ 2.000</strong>

            <div className={Styles.ganhos_caixas}>
              <div>
                <span>Ganho Bruto mensal</span>
                <strong>R$ 9.000</strong>
              </div>
              <div>
                <span>Ganho Líquido mensal</span>
                <strong>R$ 4.500</strong>
              </div>
            </div>

            <button
              type="button"
              className={Styles.botao_financas}
              onClick={() => navigate('/financeiro')}
            >
              Ver financeiro <span aria-hidden="true">➜</span>
            </button>
          </section>

          <section className={Styles.card_gastos}>
            <div className={Styles.card_header}>
              <h2>Gastos</h2>
            </div>

            <div className={Styles.gastos_conteudo}>
              <div
                className={Styles.grafico_pizza}
                role="img"
                aria-label="Gráfico de gastos e ganhos"
              />
              <ul className={Styles.legenda}>
                <li><i className={Styles.cor_mensal} />Ganho mensal</li>
                <li><i className={Styles.cor_diario} />Ganho diário</li>
                <li><i className={Styles.cor_semanal} />Ganho semanal</li>
                <li><i className={Styles.cor_gasto} />Gaste</li>
              </ul>
            </div>
          </section>

         <section className={Styles.card_conversas}>
            <div className={Styles.card_header}>
              <h2>Últimas conversas</h2>
            </div>

            <div className={Styles.lista_conversas}>
              {conversas.map(({ nome, mensagem, horario, Icone, estilo }) => (
                <button
                  className={Styles.conversa}
                  key={nome}
                  type="button"
                  onClick={() => navigate('/chat-feirante')}
                  aria-label={`Abrir conversa com ${nome}`}
                >
                  <span className={`${Styles.conversa_avatar} ${Styles[estilo]}`} aria-hidden="true">
                    <Icone size={20} strokeWidth={2.2} />
                  </span>
                  <span className={Styles.conversa_texto}>
                    <strong>{nome}</strong>
                    <span>{mensagem}</span>
                  </span>
                  <small className={Styles.conversa_horario}>{horario}</small>
                  <span className={Styles.conversa_seta} aria-hidden="true">›</span>
                </button>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default HomeFeirante;
