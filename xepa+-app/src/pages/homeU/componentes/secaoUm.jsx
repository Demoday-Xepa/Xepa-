import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../css/Home.module.css'

export function SecaoUm() {
  const navigate = useNavigate()

  const [nomeUsuario] = useState('Henrique Mazza')
  const [fotoPerfil] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87vcRDaSDk6Z7vR5jmCT6D6MjnmwnSlErxCnIM9UTiohPBEba2PLbtaMC&s=10'
  )

  return (
    <section className={styles.secaoBoasVindas}>
      <div className={styles.topoCabecalho}>
        <div className={styles.textoBoasVindas}>
          <h1>Seja bem vindo</h1>
          <h2>{nomeUsuario}</h2>
        </div>

        <div className={styles.containerFotoPerfil}>
          {fotoPerfil ? (
            <img
              src={fotoPerfil}
              alt="Foto de perfil"
              className={styles.fotoPerfil}
            />
          ) : (
            <div className={styles.perfill}></div>
          )}
        </div>
      </div>

      <input
        type="text"
        placeholder="O que você procura hoje?"
        className={styles.barraPesquisa}
      />

      <div className={styles.categorias}>
        <button
          type="button"
          className={styles.botaoCategoriaV}
          onClick={() => navigate('/Verduras')}
        >
          Verduras e legumes
        </button>

        <button type="button" className={styles.botaoCategoria}>
          Frutas
        </button>

        <button type="button" className={styles.botaoCategoria}>
          Tempero
        </button>

        <button type="button" className={styles.botaoCategoria}>
          Completa
        </button>
      </div>
    </section>
  )
}