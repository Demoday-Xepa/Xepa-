import { useCallback, useEffect, useRef, useState } from "react";
import LOREM from "./lorem";
import "./Time.css";

const CORES = ["verde", "laranja", "amarelo"];

const TIME = [
  { nome: "Matheus Barros", tags: ["Desenvolvedor", "Design"], foto: "/images/sobre/time/matheus.jpg", linkedin: "#", github: "#" },
  { nome: "Murilo Veríssimo", tags: ["Desenvolvedor", "Marketing"], foto: "/images/sobre/time/murilo.jpg", linkedin: "#", github: "#" },
  { nome: "Fernanda Ribeiro", tags: ["Documentarista", "Pesquisa"], foto: "/images/sobre/time/fernanda.jpg", linkedin: "#", github: "#" },
  { nome: "Nome Sobrenome", tags: ["Função", "Função"], foto: "/images/sobre/time/membro4.jpg", linkedin: "#", github: "#" },
  { nome: "Nome Sobrenome", tags: ["Função", "Função"], foto: "/images/sobre/time/membro5.jpg", linkedin: "#", github: "#" },
  { nome: "Nome Sobrenome", tags: ["Função", "Função"], foto: "/images/sobre/time/membro6.jpg", linkedin: "#", github: "#" },
  { nome: "Nome Sobrenome", tags: ["Função", "Função"], foto: "/images/sobre/time/membro7.jpg", linkedin: "#", github: "#" },
  { nome: "Nome Sobrenome", tags: ["Função", "Função"], foto: "/images/sobre/time/membro8.jpg", linkedin: "#", github: "#" },
];

function Carrossel() {
  const trilho = useRef(null);
  const [pagina, setPagina] = useState(0);
  const [paginas, setPaginas] = useState(1);

  const atualizar = useCallback(() => {
    const el = trilho.current;
    if (!el) return;
    setPaginas(Math.max(1, Math.ceil((el.scrollWidth - 1) / el.clientWidth)));
    setPagina(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  useEffect(() => {
    atualizar();
    window.addEventListener("resize", atualizar);
    return () => window.removeEventListener("resize", atualizar);
  }, [atualizar]);

  const irPara = (i) => {
    const el = trilho.current;
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: i * el.clientWidth, behavior: reduzir ? "auto" : "smooth" });
  };

  return (
    <div className="time">
      <ul className="time__trilho" ref={trilho} onScroll={atualizar}>
        {TIME.map((m, i) => (
          <li key={i} className={`card-time card-time--${CORES[i % CORES.length]}`}>
            <div className="card-time__topo">
              <div className="card-time__tags">
                {m.tags.map((t, j) => <span key={j}>{t}</span>)}
              </div>
              <h3>{m.nome}</h3>
            </div>
            <div className="card-time__foto">
              <img src={m.foto} alt={`Foto de ${m.nome}`} loading="lazy" />
              <div className="card-time__links">
                <a className="btn-linkedin" href={m.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn-github" href={m.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="time__pontos">
        {Array.from({ length: paginas }, (_, i) => (
          <button
            key={i}
            type="button"
            className="ponto"
            aria-label={`Ir para o grupo ${i + 1} de ${paginas}`}
            aria-current={i === pagina}
            onClick={() => irPara(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Time() {
  return (
    <section className="secao">
      <h2>Conheça nosso time !</h2>
      <p>{LOREM}</p>
      <Carrossel />
    </section>
  );
}