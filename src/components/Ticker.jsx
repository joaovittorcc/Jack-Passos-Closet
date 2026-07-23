import { CATEGORIAS } from '../data/loja'

// Ticker horizontal contínuo. Duplicamos a lista pra o loop de -50% ficar
// perfeito. Respeita prefers-reduced-motion (animação desligada no CSS).
export default function Ticker() {
  const itens = [...CATEGORIAS, ...CATEGORIAS]

  return (
    <div className="sticky top-[4.25rem] z-30 border-y border-brass/25 bg-paper py-4">
      <div className="relative flex overflow-hidden">
        <ul className="flex shrink-0 animate-ticker items-center gap-10 pr-10">
          {itens.map((cat, i) => (
            <li
              key={`${cat}-${i}`}
              className="flex items-center gap-10 font-display text-xl italic text-ink-soft sm:text-2xl"
              aria-hidden={i >= CATEGORIAS.length ? 'true' : undefined}
            >
              {cat}
              <span className="h-1.5 w-1.5 rounded-full bg-wine" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
