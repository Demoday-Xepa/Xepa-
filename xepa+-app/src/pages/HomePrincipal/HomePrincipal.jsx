
import Header from '../'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'

export function HomePrincipal() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Benefits />
      </main>
    </>
  )
}
