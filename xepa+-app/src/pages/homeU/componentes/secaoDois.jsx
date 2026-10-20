import React, { useState } from 'react';
import styles from '../css/Home.module.css';

export function SecaoUm() {
  const [nomeUsuario, setNomeUsuario] = useState("Diego Moreira");
  const [fotoPerfil, setFotoPerfil] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87vcRDaSDk6Z7vR5jmCT6D6MjnmwnSlErxCnIM9UTiohPBEba2PLbtaMC&s=10");

  return (
    <section className={styles.secaoVerde}>
     
    </section>
  );
}