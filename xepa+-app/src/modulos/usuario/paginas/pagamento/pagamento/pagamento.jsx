
import Cadeado from "@/assets/imagens/gerais/cadeado.png";
import Pix from "@/assets/imagens/gerais/pix.png";
import { useState } from "react";
import Styles from "../estilos/pagamento.module.css";
import Logo from "@/assets/imagens/gerais/logo.png";
import { useNavigate } from "react-router-dom";


export default function Pagamento() {
  const navegar = useNavigate();
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
           

      {/* Conteúdo Principal */}
      <main className={Styles.mainContainer}>
        <h1 className={Styles.pageTitle}>Realizar pagamento</h1>

        <div className={Styles.contentGrid}>
          
          {/* Seção da Forma de Pagamento (Esquerda) */}
          <section className={Styles.card}>
            <h2 className={Styles.sectionTitle}>FORMA DE PAGAMENTO</h2>

            <div className={Styles.summaryDivider}></div>

            <div className={Styles.paymentOption}>
              <div className={Styles.pixBrand}>
                <img className={Styles.pixIcon} src={Pix} alt="Pix" />
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

            <div className={Styles.summaryDivider}></div>

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
              <img src={Cadeado} alt="Ambiente seguro" />
              <span>Ambiente seguro</span>
            </div>
          </aside>

        </div>
      </main>
    </div>
    </div>
  );
}