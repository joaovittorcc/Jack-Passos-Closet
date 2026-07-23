import { useEffect, useRef } from 'react'
import { ArrowRight, Star } from 'lucide-react'
import SwingTag from './SwingTag'
import { LOJA } from '../data/loja'

function Estatistica({ valor, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="flex items-center gap-1.5 font-display text-2xl font-semibold text-ink sm:text-3xl">
        {valor}
      </span>
      <span className="font-label text-xs uppercase tracking-widest text-ink-soft">
        {label}
      </span>
    </div>
  )
}

export default function Hero() {
  const conteudoRef = useRef(null)
  const secaoRef = useRef(null)

  // Fade-out do conteúdo principal conforme a página rola. A distância do fade
  // acompanha a altura do próprio hero, então o texto só termina de sumir quando
  // o hero está saindo de cena e o ticker chega ao topo, sem vazio branco no
  // meio do scroll. Usamos rAF pra não travar o scroll e respeitamos
  // prefers-reduced-motion.
  useEffect(() => {
    const el = conteudoRef.current
    const secao = secaoRef.current
    if (!el || !secao) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Guardamos contra 0 (evita divisão por zero) e remedimos quando as fontes
    // terminam de carregar / no load, pois elas alteram a altura do hero e, com
    // ela, a distância correta do fade.
    let distancia = Math.max(secao.offsetHeight, 1)
    const medir = () => {
      distancia = Math.max(secao.offsetHeight, 1)
    }

    let raf = 0
    const aoRolar = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const progresso = Math.min(window.scrollY / distancia, 1)
        el.style.opacity = String(1 - progresso)
        el.style.transform = `translateY(${progresso * 48}px)`
      })
    }

    window.addEventListener('scroll', aoRolar, { passive: true })
    window.addEventListener('resize', medir)
    window.addEventListener('load', medir)
    if (document.fonts?.ready) {
      document.fonts.ready.then(medir)
    }
    aoRolar()
    return () => {
      window.removeEventListener('scroll', aoRolar)
      window.removeEventListener('resize', medir)
      window.removeEventListener('load', medir)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      id="topo"
      ref={secaoRef}
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
    >
      <div
        ref={conteudoRef}
        className="mx-auto flex max-w-3xl flex-col items-center px-5 py-14 text-center sm:px-8 sm:py-20"
      >
        {/* Etiqueta pendurada no topo central */}
        <div className="flex flex-col items-center">
          <span className="h-16 w-px bg-brass sm:h-20" aria-hidden="true" />
          <SwingTag
            className="relative animate-sway origin-top bg-gradient-to-br from-wine to-wine-dark px-8 pb-10 pt-12 text-center text-cream shadow-2xl shadow-wine/30 w-56 sm:w-64"
            holeClassName="h-3.5 w-3.5 bg-cream/90 ring-2 ring-wine-dark"
          >
            <p className="mt-4 font-label text-[0.65rem] uppercase tracking-[0.3em] text-brass">
              Since Anápolis
            </p>
            <p className="mt-3 font-display text-3xl font-semibold italic leading-tight">
              Jack Passos
            </p>
            <p className="font-label text-sm uppercase tracking-[0.4em] text-cream/80">
              Closet
            </p>
            <span className="mx-auto mt-5 block h-px w-12 bg-brass" />
            <p className="mt-4 text-xs text-cream/70">Moda feminina</p>
          </SwingTag>
        </div>

        <p className="mt-10 font-label text-xs uppercase tracking-[0.3em] text-wine">
          Loja física · {LOJA.bairro}
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
          Peça que <span className="italic text-wine">ninguém</span> mais tem,
          roupa nova toda semana.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          Moda feminina selecionada a dedo no Jundiaí, em Anápolis. Você vê no
          catálogo, chama no WhatsApp e a gente separa pra você.
        </p>

        <div className="mt-8">
          <a
            href="#colecao"
            className="inline-flex items-center gap-2 rounded-full bg-wine px-6 py-3 font-label text-sm uppercase tracking-widest text-cream transition-colors hover:bg-wine-dark"
          >
            Ver coleção
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-brass/25 pt-6">
          <Estatistica
            valor={
              <>
                {LOJA.googleNota}
                <Star className="h-5 w-5 fill-brass text-brass" aria-hidden="true" />
              </>
            }
            label={`${LOJA.googleAvaliacoes} avaliações Google`}
          />
          <Estatistica valor={LOJA.seguidoresIG} label="Seguidores no Instagram" />
          <Estatistica valor="100%" label="Varejo, sem atacado" />
        </div>
      </div>
    </section>
  )
}
