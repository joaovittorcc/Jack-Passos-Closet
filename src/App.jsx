import AvisoDemo from './components/AvisoDemo'
import Header from './components/Header'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Colecao from './components/Colecao'
import ProvaSocial from './components/ProvaSocial'
import Sobre from './components/Sobre'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <AvisoDemo />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Colecao />
        <ProvaSocial />
        <Sobre />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
