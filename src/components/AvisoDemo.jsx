import { useState } from 'react'
import { Info, X } from 'lucide-react'

// Faixa de aviso no topo: deixa claro que o site é uma demonstração e que o
// conteúdo é ilustrativo. Some ao ser fechada (estado local, sem persistência).
export default function AvisoDemo() {
  const [visivel, setVisivel] = useState(true)
  if (!visivel) return null

  return (
    <div className="bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-2 sm:px-8">
        <Info className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
        <p className="flex-1 text-center text-xs leading-snug text-cream/85 sm:text-sm">
          Este site é uma{' '}
          <strong className="font-semibold text-cream">demonstração</strong>.
          Fotos, produtos, preços e textos são ilustrativos e ainda podem mudar.
        </p>
        <button
          type="button"
          onClick={() => setVisivel(false)}
          aria-label="Fechar aviso"
          className="shrink-0 rounded-full p-1 text-cream/70 transition-colors hover:text-cream"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
