import { useState } from "react";
import Styles from "../css/pagamento.module.css";

export default function Pagamento() {
  const [copiado, setCopiado] = useState(false);

  const codigoPix = "00020101021226850014BR.GOV.BCB.PIX";

  async function copiarPix() {
    try {
      await navigator.clipboard.writeText(codigoPix);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 3000); // Reseta o texto após 3 segundos
    } catch {
      setCopiado(false);
    }
  }

  return (
    <div className={Styles.mainContainer}>
    <div className={Styles.pagamentoContainer}>
      <header className={Styles.navbar}>
        <div className={Styles.logo}>
          <i className="fa-solid fa-basket-shopping"></i>
          <span>Xepa+</span>
        </div>

        <div className={Styles.userMenu}>
          <button className={Styles.btnIcon} aria-label="Notificações">
            <i className="fa-regular fa-bell"></i>
          </button>

          <div className={Styles.userProfile}>
            <div className={Styles.avatarPlaceholder}>
              <i className="fa-solid fa-user"></i>
            </div>
            <span className={Styles.userName}>Henrique</span>
          </div>

          <a href="#" className={Styles.btnVoltar}>Voltar</a>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className={Styles.mainContainer}>
        <h1 className={Styles.pageTitle}>Realizar pagamento</h1>

        <div className={Styles.contentGrid}>
          
          {/* Seção da Forma de Pagamento (Esquerda) */}
          <section className={Styles.card}>
            <h2 className={Styles.sectionTitle}>FORMA DE PAGAMENTO</h2>

            <div className={Styles.paymentOption}>
              <div className={Styles.pixBrand}>
                <svg className={Styles.pixIcon} viewBox="0 0 512 512" fill="currentColor">
                  <path d="M110.5 129l103.8 103.8c23.2 23.2 60.8 23.2 84 0L402.1 129c22.5-22.5 59-22.5 81.5 0l15.6 15.6c22.5 22.5 22.5 59 0 81.5L395.4 329.9c-23.2 23.2-60.8 23.2-84 0L207.6 226.1c-23.2-23.2-60.8-23.2-84 0L20.2 329.9c-22.5 22.5-59 22.5-81.5 0l-15.6-15.6c-22.5-22.5-22.5-59 0-81.5L26.9 129c22.5-22.5 59-22.5 83.6 0z" />
                </svg>
                <span>PIX</span>
              </div>
              <div className={Styles.radioIndicator}>
                <div className={Styles.radioInner}></div>
              </div>
            </div>

            <div className={Styles.qrCodeWrapper}>
              <h3 className={Styles.qrInstructionsTitle}>Escaneie o QR Code</h3>
              <p className={Styles.qrInstructionsSub}>Abra o app do seu banco, escolha pagar com Pix e aponte a câmera.</p>

              <div className={Styles.qrCodeBox}>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=00020126580014br.gov.bcb.pix0136xepa-plus-pagamento-exemplo-12345" alt="QR Code PIX" />
              </div>

              <button className={Styles.btnCopyPix} onClick={copiarPix}>
                {copiado ? "CÓDIGO COPIADO!" : "COPIAR CÓDIGO PIX"}
              </button>
            </div>
          </section>

          {/* Seção do Resumo do Pedido (Direita) */}
          <aside className={Styles.card}>
            <h2 className={Styles.summaryTitle}>Resumo do pedido</h2>

            <ul className={Styles.orderItems}>
              <li className={Styles.itemRow}>
                <span className={Styles.itemName}>Xepa Legumes</span>
                <span className={Styles.itemPrice}>R$ 40</span>
              </li>
              <li className={Styles.itemRow}>
                <span className={Styles.itemName}>Xepa Frutas</span>
                <span className={Styles.itemPrice}>R$ 40</span>
              </li>
              <li className={Styles.itemRow}>
                <span className={Styles.itemName}>Xepa Completa</span>
                <span className={Styles.itemPrice}>R$ 50</span>
              </li>
              <li className={Styles.itemRow}>
                <span className={Styles.itemName}>Retirada</span>
                <span className={`${Styles.itemPrice} ${Styles.freeTag}`}>Grátis</span>
              </li>
            </ul>

            <div className={Styles.summaryDivider}></div>

            <div className={Styles.totalRow}>
              <span>Total</span>
              <span>R$130</span>
            </div>

            <button className={Styles.btnConfirmPayment}>
              Já fiz o pagamento
            </button>

            <div className={Styles.secureBadge}>
              <i className="fa-solid fa-lock"></i>
              <span>Ambiente seguro</span>
            </div>
          </aside>

        </div>
      </main>
    </div>
    </div>
  );
}