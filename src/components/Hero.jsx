import { ArrowRight, MessageCircle, Star } from 'lucide-react'
import SwingTag from './SwingTag'
import { LOJA, whatsappLink } from '../data/loja'

function Estatistica({ valor, label }) {
  return (
    <div className="flex flex-col">
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
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Coluna de texto */}
        <div className="max-w-xl">
          <p className="font-label text-xs uppercase tracking-[0.3em] text-wine">
            Loja física · {LOJA.bairro}
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Peça que{' '}
            <span className="italic text-wine">ninguém</span> mais tem, roupa
            nova toda semana.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Moda feminina selecionada a dedo no Jundiaí, em Anápolis. Você vê no
            catálogo, chama no WhatsApp e a gente separa pra você.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#colecao"
              className="inline-flex items-center gap-2 rounded-full bg-wine px-6 py-3 font-label text-sm uppercase tracking-widest text-cream transition-colors hover:bg-wine-dark"
            >
              Ver coleção
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(
                `Olá! Vim pelo site da ${LOJA.nome} e quero ver as novidades da semana.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-wine/40 px-6 py-3 font-label text-sm uppercase tracking-widest text-wine transition-colors hover:border-wine hover:bg-wine hover:text-cream"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-brass/25 pt-6">
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

        {/* Etiqueta gigante pendurada */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative flex flex-col items-center">
            {/* fio */}
            <span
              className="h-16 w-px bg-brass sm:h-20"
              aria-hidden="true"
            />
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
        </div>
      </div>
    </section>
  )
}
