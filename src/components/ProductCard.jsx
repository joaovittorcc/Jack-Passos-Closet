import { MessageCircle } from 'lucide-react'
import SwingTag from './SwingTag'
import { LOJA, whatsappLink } from '../data/loja'

function precoBR(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  })
}

export default function ProductCard({ produto }) {
  const { nome, descricao, preco, imagem, corSwatch } = produto

  const mensagem = whatsappLink(
    `Olá! Tenho interesse na peça "${nome}" (${precoBR(preco)}) que vi no site da ${LOJA.nome}. Ainda tem disponível?`,
  )

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brass/20 bg-cream shadow-sm transition-shadow hover:shadow-lg">
      {/* Foto ou swatch de fallback */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {imagem ? (
          <img
            src={imagem}
            alt={nome}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="fabric-texture h-full w-full transition-transform duration-500 group-hover:scale-105"
            style={{ background: corSwatch }}
            role="img"
            aria-label={`${nome} (foto em breve)`}
          />
        )}

        {/* Mini etiqueta de preço pendurada no canto */}
        <SwingTag
          className="absolute right-3 top-0 w-16 bg-paper pb-3 pt-4 text-center shadow-md sm:w-[4.5rem]"
          holeClassName="h-2 w-2 bg-cream ring-1 ring-brass/50"
        >
          <p className="mt-1.5 font-label text-[0.55rem] uppercase tracking-widest text-ink-soft">
            R$
          </p>
          <p className="font-display text-lg font-semibold leading-none text-wine">
            {preco}
          </p>
        </SwingTag>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-semibold leading-tight text-ink">
          {nome}
        </h3>
        <p className="mt-1 text-sm text-ink-soft">{descricao}</p>

        <a
          href={mensagem}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-wine px-4 py-2.5 font-label text-xs uppercase tracking-widest text-cream transition-colors hover:bg-wine-dark"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Perguntar no zap
        </a>
      </div>
    </article>
  )
}
