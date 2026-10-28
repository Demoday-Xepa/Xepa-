import iconlixeira from '../../../../../assets/imagens/gerais/iconlixeira.png';

import vector from '../../../../../assets/imagens/gerais/vector.png';


import { useNavigate } from 'react-router-dom';
import Styles from '../estilos/carrinho.module.css';

const imageC = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop';
const imageL = 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&auto=format&fit=crop';
const imageF = 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&auto=format&fit=crop';

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
                  <div className='lixeira'>
                    <img src={iconlixeira} alt="icone da lixeira" />
                  </div>
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
                  <img src={iconlixeira} alt="iconlixeira" />
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
                   <img src={iconlixeira} alt="" />
                </button>
              </div>
            </div>
          </section>

          <aside className={Styles.resumo_card}>
            <h4>Resumo do pedido</h4>

            <hr />

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
              <div className='vector'>
                    <img src={vector} alt="vector" />
                    </div>
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