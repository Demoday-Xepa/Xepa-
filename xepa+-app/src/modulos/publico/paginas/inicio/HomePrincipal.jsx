
import Header from "@/modulos/publico/paginas/inicio/componentes/Header.jsx";
import Hero from "@/modulos/publico/paginas/inicio/componentes/Hero.jsx";
import About from "@/modulos/publico/paginas/inicio/componentes/About.jsx";
import HowItWorks from "@/modulos/publico/paginas/inicio/componentes/HowItWorks.jsx";
import Benefits from "@/modulos/publico/paginas/inicio/componentes/Benefits.jsx";
import PlanosFeirante from "@/modulos/publico/paginas/inicio/componentes/PlanosFeirante.jsx";
import MapaFeiras from "@/modulos/publico/paginas/inicio/componentes/MapaFeiras.jsx";
import PerguntasFrequentes from "@/modulos/publico/paginas/inicio/componentes/PerguntasFrequentes.jsx";
import Propaganda from "@/modulos/publico/paginas/inicio/componentes/Propaganda.jsx";
function HomePrincipal() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Benefits />
        <Propaganda />
        <PlanosFeirante />
        <MapaFeiras />
        <PerguntasFrequentes />
      </main>
    </>
  );
}

export default HomePrincipal;
