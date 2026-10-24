import { useNavigate } from 'react-router-dom';
import Styles from '../estilos/carrinho.module.css';
import imageC from '@/assets/imagens/gerais/xepaCompleta.jpg';
import imageL from '@/assets/imagens/gerais/xepaLegumes.jpg';
import imageF from '@/assets/imagens/gerais/xepaFrutas.jpg';

export function Carrinho() {
  const navegar = useNavigate();

  return (
    <div className={Styles.container}>
      <main className={Styles.main_content}>
        <h1>Meu carrinho</h1>

        <div className={Styles.carrinho_grid}>
          <section className={Styles.tabela_produtos}>
            <div className={Styles.tabela_header}>
              <h4>Produtos</h4>
              <h4>Retirada</h4>
              <h4>Total</h4>
              <h4>Ação</h4>
            </div>

            <div className={Styles.tabela_linha}>
              <div className={Styles.coluna_produto}>
                <img src={imageC} alt="Xepa Completa" />
                <div>
                  <h4>Xepa Completa</h4>
                  <p>Alface, brócolis, batata...</p>
                </div>
              </div>

              <div className={Styles.coluna_retirada}>
                <h4>Es. do Sabão 341</h4>
                <p>Barraca do Gai</p>
              </div>

              <div className={Styles.coluna_total}>
                <h4>R$40</h4>
              </div>

              <div className={Styles.coluna_acao}>
                <button type="button" aria-label="Remover Xepa Completa">
                  <span className={Styles.icon}>🗑️</span>
                </button>
              </div>
            </div>

            <div className={Styles.tabela_linha}>
              <div className={Styles.coluna_produto}>
                <img src={imageL} alt="Xepa de Legumes" />
                <div>
                  <h4>Xepa de Legumes</h4>
                  <p>Alface, brócolis, batata...</p>
                </div>
              </div>

              <div className={Styles.coluna_retirada}>
                <h4>Es. do Sabão 341</h4>
                <p>Barraca da Paula</p>
              </div>

              <div className={Styles.coluna_total}>
                <h4>R$50</h4>
              </div>

              <div className={Styles.coluna_acao}>
                <button type="button" aria-label="Remover Xepa de Legumes">
                  <span className={Styles.icon}>🗑️</span>
                </button>
              </div>
            </div>

            <div className={Styles.tabela_linha}>
              <div className={Styles.coluna_produto}>
                <img src={imageF} alt="Xepa de Frutas" />
                <div>
                  <h4>Xepa de Frutas</h4>
                  <p>Frutas variadas da estação...</p>
                </div>
              </div>

              <div className={Styles.coluna_retirada}>
                <h4>Es. do Sabão 341</h4>
                <p>Barraca do Felipe</p>
              </div>

              <div className={Styles.coluna_total}>
                <h4>R$40</h4>
              </div>

              <div className={Styles.coluna_acao}>
                <button type="button" aria-label="Remover Xepa de Frutas">
                  <span className={Styles.icon}>🗑️</span>
                </button>
              </div>
            </div>
          </section>

          <aside className={Styles.resumo_card}>
            <h4>Resumo do pedido</h4>

            <div className={Styles.resumo_itens}>
              <div className={Styles.resumo_linha}>
                <h4>Xepa Legumes</h4>
                <p>R$ 50</p>
              </div>

              <div className={Styles.resumo_linha}>
                <h4>Xepa Frutas</h4>
                <p>R$ 40</p>
              </div>

              <div className={Styles.resumo_linha}>
                <h4>Xepa Completa</h4>
                <p>R$ 40</p>
              </div>

              <div className={Styles.resumo_linha}>
                <h4>Retirada</h4>
                <p>Grátis</p>
              </div>
            </div>

            <hr />

            <div className={Styles.resumo_total}>
              <h4>Total</h4>
              <h4>R$130</h4>
            </div>

            <div className={Styles.alerta_endereco}>
              <span className={Styles.icon}>⚠️</span>
              <p>
                Reveja o endereço das barracas e lembre-se de mostrar o QRCode
                para retirada do produto.
              </p>
            </div>

            <button
              type="button"
              className={Styles.btn_pagar}
              onClick={() => navegar('/pagamento')}
            >
              <h3>Pagar</h3>
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}