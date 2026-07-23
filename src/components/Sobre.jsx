import { Store, Tag, CreditCard, Truck } from 'lucide-react'

const DIFERENCIAIS = [
  {
    icon: Store,
    titulo: 'Loja física',
    texto: 'Espaço no Jundiaí pra você provar e sentir a peça antes de levar.',
  },
  {
    icon: Tag,
    titulo: 'Só varejo',
    texto: 'Nada de atacado. Curadoria pensada pra quem quer uma peça única.',
  },
  {
    icon: CreditCard,
    titulo: 'Cartão e Pix',
    texto: 'Pague do jeito que ficar melhor pra você, no cartão ou no Pix.',
  },
  {
    icon: Truck,
    titulo: 'Entrega',
    texto: 'Comprou de longe? Combinamos a entrega pelo WhatsApp.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-label text-xs uppercase tracking-[0.3em] text-wine">
            Sobre a loja
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Um closet de moda feminina em{' '}
            <span className="italic text-wine">Anápolis</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            A Jack Passos Closet nasceu pra vestir a mulher de Anápolis com peças
            que fogem do óbvio. Roupa nova entra toda semana, escolhida uma a uma,
            sempre em varejo. Aqui cada cliente é atendida de perto, do provador
            ao pós-venda no WhatsApp.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {DIFERENCIAIS.map(({ icon: Icon, titulo, texto }) => (
            <div
              key={titulo}
              className="rounded-2xl border border-brass/20 bg-paper p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-wine/10 text-wine">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                {titulo}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
