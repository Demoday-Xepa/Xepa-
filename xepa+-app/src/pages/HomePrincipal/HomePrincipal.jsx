
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import PlanosFeirante from "./components/PlanosFeirante";
import MapaFeiras from "./components/MapaFeiras";
import PerguntasFrequentes from "./components/PerguntasFrequentes";
import Propaganda from "./components/Propaganda";
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
