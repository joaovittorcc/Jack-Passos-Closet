import ProductCard from './ProductCard'
import { PRODUTOS } from '../data/produtos'

export default function Colecao() {
  return (
    <section id="colecao" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="font-label text-xs uppercase tracking-[0.3em] text-wine">
            Coleção da semana
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Peças que acabaram de{' '}
            <span className="italic text-wine">chegar</span>
          </h2>
          <p className="mt-3 text-ink-soft">
            Uma amostra do que tem na loja agora. Gostou de alguma? Chama no
            WhatsApp que a gente confirma tamanho e disponibilidade.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {PRODUTOS.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </section>
  )
}
