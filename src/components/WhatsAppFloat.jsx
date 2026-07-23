import { MessageCircle } from 'lucide-react'
import { LOJA, whatsappLink } from '../data/loja'

// Botão flutuante, sempre visível, canto inferior direito.
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(`Olá! Vim pelo site da ${LOJA.nome} e quero atendimento.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-wine text-cream shadow-lg shadow-wine/40 transition-transform hover:scale-105 hover:bg-wine-dark"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  )
}
