import { MapPin, MessageCircle, Instagram, Navigation } from 'lucide-react'
import { LOJA, whatsappLink } from '../data/loja'

export default function Footer() {
  return (
    <footer id="visite" className="scroll-mt-20 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {/* CTA final */}
        <div className="rounded-3xl border border-brass/30 bg-wine px-6 py-10 text-center sm:px-12 sm:py-14">
          <p className="font-label text-xs uppercase tracking-[0.3em] text-brass">
            Passa lá
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Viu uma peça que é a sua cara?{' '}
            <span className="italic">Chama a gente.</span>
          </h2>
          <a
            href={whatsappLink(
              `Olá! Vim pelo site da ${LOJA.nome} e quero conversar.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 font-label text-sm uppercase tracking-widest text-wine transition-colors hover:bg-paper"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chamar no WhatsApp
          </a>
        </div>

        {/* Contatos */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <span className="font-display text-xl font-semibold">
              Jack Passos
            </span>
            <span className="ml-2 font-label text-xs uppercase tracking-[0.35em] text-brass">
              Closet
            </span>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              Moda feminina, varejo, peça nova toda semana.
            </p>
          </div>

          <div>
            <h3 className="font-label text-xs uppercase tracking-widest text-brass">
              Endereço
            </h3>
            <a
              href={LOJA.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-start gap-2 text-sm text-cream/80 transition-colors hover:text-cream"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              <span>{LOJA.endereco}</span>
            </a>
            <a
              href={LOJA.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 font-label text-xs uppercase tracking-widest text-brass hover:text-cream"
            >
              <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
              Ver no mapa
            </a>
          </div>

          <div>
            <h3 className="font-label text-xs uppercase tracking-widest text-brass">
              WhatsApp
            </h3>
            <a
              href={whatsappLink(`Olá! Vim pelo site da ${LOJA.nome}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-cream"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              {LOJA.whatsappDisplay}
            </a>
          </div>

          <div>
            <h3 className="font-label text-xs uppercase tracking-widest text-brass">
              Instagram
            </h3>
            <a
              href={LOJA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-cream"
            >
              <Instagram className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              {LOJA.instagramHandle}
            </a>
            <p className="mt-1 text-xs text-cream/50">{LOJA.seguidoresIG} seguidores</p>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-center">
          <p className="font-label text-xs uppercase tracking-widest text-cream/50">
            © {new Date().getFullYear()} {LOJA.nome} · {LOJA.bairro}
          </p>
        </div>
      </div>
    </footer>
  )
}
