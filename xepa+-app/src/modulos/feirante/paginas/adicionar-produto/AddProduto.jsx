
import { useState } from 'react';
import styles from '@/modulos/feirante/paginas/adicionar-produto/estilos/AddProduto.module.css';

function AddProduto() {
  const [imagem, setImagem] = useState(null);

  function adicionarProduto(event) {
    event.preventDefault();
    alert('Estrutura do formulário pronta!');
  }

  function selecionarImagem(event) {
    const arquivo = event.target.files[0];

    if (!arquivo) {
      return;
    }

    if (arquivo.size > 30 * 1024 * 1024) {
      alert('A imagem deve ter no máximo 30 MB.');
      event.target.value = '';
      return;
    }

    setImagem(arquivo);
  }

  return (
    <div className={styles.pagina}>
      <main className={styles.conteudo}>
        <h1>Vamos adicionar seu produto!</h1>

        <p className={styles.introducao}>
          Preencha os dados abaixo para cadastrar um novo produto na sua banca ou loja.
        </p>

        <form onSubmit={adicionarProduto}>
          <div className={styles.campos}>
            <div className={styles.campo}>
              <label htmlFor="nome">Nome do Produto</label>
              <input id="nome" name="nome" required />
            </div>

            <div className={styles.campo}>
              <label htmlFor="categoria">Categoria do Produto</label>
              <select
                id="categoria"
                name="categoria"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione uma categoria
                </option>
                <option value="frutas">Frutas</option>
                <option value="verduras">Verduras</option>
                <option value="legumes">Legumes</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div className={styles.campo}>
              <label htmlFor="preco">Preço</label>
              <input
                id="preco"
                name="preco"
                type="number"
                min="0.01"
                step="0.01"
                required
              />
            </div>

            <div className={styles.campo}>
              <label htmlFor="validade">Validade Estimada</label>
              <input
                id="validade"
                name="validade"
                type="date"
                required
              />
            </div>

            <div className={`${styles.campo} ${styles.campoCompleto}`}>
              <label htmlFor="local">Local de retirada</label>
              <input id="local" name="local" required />
            </div>
          </div>

          <section className={styles.secao}>
            <h2>Adicione a Imagem do Produto</h2>

            <p className={styles.descricaoSecao}>
              Envie uma foto clara e de boa qualidade do produto para atrair mais clientes.
            </p>

            <div className={styles.upload}>
              <h3>Escolha a imagem no seu dispositivo aqui</h3>
              <p>PNG, JPG e outros formatos de imagem</p>
              <p>No máximo 30 MB</p>

              <label className={styles.botaoImagem}>
                Adicionar Imagem
                <input
                  type="file"
                  name="imagem"
                  accept="image/*"
                  onChange={selecionarImagem}
                  hidden
                />
              </label>

              {imagem && <p>Imagem selecionada: {imagem.name}</p>}
            </div>
          </section>

          <section className={styles.secao}>
            <h2>Descrição do Produto</h2>

            <p className={styles.descricaoSecao}>
              Descreva os detalhes do produto, como frescor, origem, peso ou quantidade disponível.
            </p>

            <textarea
              className={styles.textarea}
              name="descricao"
              aria-label="Descrição do produto"
              rows="5"
              required
            />
          </section>

          <div className={styles.acoes}>
            <button type="submit">Adicionar produto</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddProduto;
