// Dados reais do negócio. Fonte única de verdade, usar em todos os componentes.
export const LOJA = {
  nome: 'Jack Passos Closet',
  endereco: 'R. 8, Quadra 8 - Lote 27, Jundiaí, Anápolis - GO, 75115-070',
  bairro: 'Jundiaí, Anápolis',
  whatsappNumero: '5562993405953',
  whatsappDisplay: '(62) 99340-5953',
  instagram: 'https://www.instagram.com/jackpassoscloset',
  instagramHandle: '@jackpassoscloset',
  seguidoresIG: '35 mil',
  maps: 'https://share.google/t5U92KXbdhzeP1nAf',
  googleNota: '4,8',
  googleAvaliacoes: 26,
}

// Monta link do WhatsApp com mensagem pré-preenchida.
export function whatsappLink(mensagem) {
  const base = `https://wa.me/${LOJA.whatsappNumero}`
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base
}

// Avaliações reais (paráfrase curta). Não inventar novas.
export const AVALIACOES = [
  {
    texto:
      'Não vivo sem os looks daqui. Qualidade ótima, preço justo, e peça que ninguém mais tem.',
    autor: 'Cliente Google',
  },
  {
    texto:
      'Loja incrível, roupas lindas, atendimento super atencioso. Já sei que vou voltar mais vezes.',
    autor: 'Cliente Google',
  },
  {
    texto:
      'Ótimo atendimento, roupas de muita qualidade. Super indico pra quem procura algo diferente.',
    autor: 'Cliente Google',
  },
]

export const CATEGORIAS = [
  'Vestidos',
  'Conjuntos',
  'Blusas',
  'Saias',
  'Macacões',
  'Acessórios',
]
