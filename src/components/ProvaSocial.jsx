import { Star } from 'lucide-react'
import { LOJA, AVALIACOES } from '../data/loja'

export default function ProvaSocial() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-label text-xs uppercase tracking-[0.3em] text-wine">
              Quem já é cliente
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              O que dizem sobre a{' '}
              <span className="italic text-wine">loja</span>
            </h2>
          </div>

          {/* Badge de nota média */}
          <div className="flex items-center gap-3 rounded-full border border-brass/30 bg-cream px-5 py-3">
            <span className="font-display text-3xl font-semibold text-ink">
              {LOJA.googleNota}
            </span>
            <div className="flex flex-col">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brass text-brass"
                  />
                ))}
              </div>
              <span className="font-label text-xs uppercase tracking-widest text-ink-soft">
                {LOJA.googleAvaliacoes} avaliações no Google
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {AVALIACOES.map((av, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-brass/20 bg-cream p-6"
            >
              <div className="flex" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-brass text-brass" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-ink">
                “{av.texto}”
              </blockquote>
              <figcaption className="mt-4 font-label text-xs uppercase tracking-widest text-ink-soft">
                {av.autor}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
