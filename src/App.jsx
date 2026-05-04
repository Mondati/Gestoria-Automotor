import { useReveal } from './hooks/useReveal'
import { WASvg } from './components/Icons'
import { Folio } from './components/Folio'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Trust } from './components/Trust'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Advisory } from './components/Advisory'
import { Coverage } from './components/Coverage'
import { Location } from './components/Location'
import { Closing as Contact } from './components/Contact'

import './styles/global.css'
import './styles/components.css'
import './styles/animations.css'
import './styles/folio.css'
import './styles/nav.css'
import './styles/hero.css'
import './styles/trust.css'
import './styles/services.css'
import './styles/process.css'
import './styles/advisory.css'
import './styles/coverage.css'
import './styles/location.css'
import './styles/contact.css'


const WA1 = "https://wa.me/542615971624?text=Hola%2C%20consulta%20sobre%20tr%C3%A1mites%20vehiculares";

function App() {
  useReveal();

  return (
    <>
      <a href="#main" className="skip-link">Saltar al contenido principal</a>
      <Folio />
      <Nav wa={WA1} />
      <main id="main">
        <Hero />
        <Trust />
        <Services wa={WA1} />
        <Process />
        <Advisory />
        <Coverage />
        <Location />
        <Contact />
      </main>
      <a href={WA1} target="_blank" rel="noreferrer" className="wa-float" aria-label="WhatsApp">
        <WASvg />
      </a>
    </>
  )
}

export default App
