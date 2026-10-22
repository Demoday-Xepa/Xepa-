import styles from "../css/LocalizacaoPerfil.module.css";

function LocalizacaoPerfil({ feira, feirante }) {
  return (
    <div className={styles.cards}>
      {/* LOCALIZAÇÃO */}
      <section className={styles.card}>
        <h2>Localização da feira</h2>
        <p className={styles.sub}>Onde encontrar esta barraca</p>

        <div className={styles.mapa}>
          <span className={styles.selo}>LOCALIZAÇÃO APROXIMADA</span>
          <iframe src={feira.mapa} title="Mapa das feiras livres" loading="lazy" allowFullScreen />
        </div>

        <div className={styles.infoFeira}>
          <span className={styles.nomeFeira}><i /> {feira.nome}</span>
          <span className={styles.cinza}>{feira.distancia}</span>
        </div>
        <p className={`${styles.cinza} ${styles.endereco}`}>{feira.endereco}</p>
      </section>

      {/* PERFIL */}
      <section className={`${styles.card} ${styles.perfil}`}>
        <h2>Perfil do feirante</h2>
        <p className={styles.sub}>Conheça quem preparou sua xepa</p>

        <div className={styles.pessoa}>
          <div className={styles.avatar}></div>
          <strong>{feirante.nome}</strong>
        </div>

        <div className={styles.sobre}>
          <span className={styles.rotulo}>SOBRE A BARRACA</span>
          <h3>{feirante.barraca}</h3>
          <p>{feirante.descricao}</p>
        </div>

        <div className={styles.rodape}>
          <div>
            <span className={styles.rotuloSimples}>Horário de atendimento</span>
            <strong>{feirante.horario}</strong>
          </div>
          <button type="button">Falar com o feirante</button>
        </div>
      </section>
    </div>
  );
}

export default LocalizacaoPerfil;