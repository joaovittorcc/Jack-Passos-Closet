import { useState } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import { LOJA, whatsappLink } from '../data/loja'

const NAV = [
  { label: 'Coleção', href: '#colecao' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Visite a loja', href: '#visite' },
]

export default function Header() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-brass/25 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#topo" className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
            Jack Passos
          </span>
          <span className="font-label text-[0.65rem] uppercase tracking-[0.35em] text-wine">
            Closet
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-label text-sm uppercase tracking-widest text-ink-soft transition-colors hover:text-wine"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(
              `Olá! Vim pelo site da ${LOJA.nome} e quero saber das novidades.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-wine px-4 py-2 font-label text-sm uppercase tracking-widest text-cream transition-colors hover:bg-wine-dark"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
          >
            {aberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {aberto && (
        <nav className="border-t border-brass/25 bg-cream px-5 py-3 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setAberto(false)}
              className="block py-2.5 font-label text-base uppercase tracking-widest text-ink-soft"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
