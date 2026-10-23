import React, { useState } from 'react';
import styles from "@/modulos/usuario/paginas/impacto/estilos/Impacto.module.css";
export function Titulo() {
  return (
    <section className={styles.titulo}>
        <h1 className={styles.tituloPrincipal}>Seu impacto</h1>
        <p className={styles.subtitulo}>Cada xepa é comida que não vai pro lixo!</p>
    </section>
  );
}