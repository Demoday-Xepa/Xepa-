
import React from 'react';

export function Carrinho() {
  return (
    <div className={"container"}>
      {/* Cabeçalho / Navbar */}
      <header className={"header"}>
        <div className={"logo"}>
          {/* Logo Xepa+ */}
          <img src="/logo-xepa.png" alt="Xepa+" />
        </div>
      </header>

      {/* Título Principal */}
      <main className={"main-content"}>
        <h1>Meu carrinho</h1>

        <div className={"carrinho-grid"}>
          {/* Tabela / Lista de Produtos */}
          <section className={"tabela-produtos"}>
            {/* Cabeçalho da Tabela */}
            <div className={"tabela-header"}>
              <h4>Produtos</h4>
              <h4>Retirada</h4>
              <h4>Total</h4>
              <h4>Ação</h4>
            </div>

            {/* Linha 1 */}
            <div className={"tabela-linha"}>
              <div className={"coluna-produto"}>
                <img src="/xepa-completa.jpg" alt="Xepa Completa" />
                <div>
                  <h4>Xepa Completa</h4>
                  <p>Alface, brócolis, batata...</p>
                </div>
              </div>
              <div className={"coluna-retirada"}>
                <h4>Es. do Sabão 341</h4>
                <p>Barraca do Gai</p>
              </div>
              <div className={"coluna-total"}>
                <h4>R$40</h4>
              </div>
              <div className={"coluna-acao"}>
                <button aria-label="Remover item">
                  <span className={"icon"}>🗑️</span>
                </button>
              </div>
            </div>

            {/* Linha 2 */}
            <div className={"tabela-linha"}>
              <div className={"coluna-produto"}>
                <img src="/xepa-legumes.jpg" alt="Xepa de Legumes" />
                <div>
                  <h4>Xepa de Legumes</h4>
                  <p>Alface, brócolis, batata...</p>
                </div>
              </div>
              <div className={"coluna-retirada"}>
                <h4>Es. do Sabão 341</h4>
                <p>Barraca da Paula</p>
              </div>
              <div className={"coluna-total"}>
                <h4>R$50</h4>
              </div>
              <div className={"coluna-acao"}>
                <button aria-label="Remover item">
                  <span className={"icon"}>🗑️</span>
                </button>
              </div>
            </div>

            {/* Linha 3 */}
            <div className={"tabela-linha"}>
              <div className={"coluna-produto"}>
                <img src="/xepa-frutas.jpg" alt="Xepa Frutas" />
                <div>
                  <h4>Xepa Frutas</h4>
                  <p>Alface, brócolis, batata...</p>
                </div>
              </div>
              <div className={"coluna-retirada"}>
                <h4>Es. do Sabão 341</h4>
                <p>Barraca do Felipe</p>
              </div>
              <div className={"coluna-total"}>
                <h4>R$40</h4>
              </div>
              <div className={"coluna-acao"}>
                <button aria-label="Remover item">
                  <span className={"icon"}>🗑️</span>
                </button>
              </div>
            </div>
          </section>

          {/* Card Resumo do Pedido */}
          <aside className={"resumo-card"}>
            <h4>Resumo do pedido</h4>

            <div className={"resumo-itens"}>
              <div className={"resumo-linha"}>
                <h4>Xepa Legumes</h4>
                <p>R$ 40</p>
              </div>
              <div className={"resumo-linha"}>
                <h4>Xepa Frutas</h4>
                <p>R$ 40</p>
              </div>
              <div className={"resumo-linha"}>
                <h4>Xepa Completa</h4>
                <p>R$ 50</p>
              </div>
              <div className={"resumo-linha"}>
                <h4>Retirada</h4>
                <p>Grátis</p>
              </div>
            </div>

            <hr />

            <div className={"resumo-total"}>
              <h4>Total</h4>
              <h4>R$130</h4>
            </div>

            <div className={"alerta-endereco"}>
              <span className={"icon"}>⚠️</span>
              <p>
                Reveja o endereço das barracas e lembre-se de mostrar o QRCode
                para retirada do produto
              </p>
            </div>

            <button className={"btn-pagar"}>
              <h3>Pagar</h3>
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}