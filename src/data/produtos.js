// ============================================================================
// CATÁLOGO DE PRODUTOS
//
// PENDÊNCIA (FOTOS REAIS):
// A cliente tem uma pasta no Google Drive ("Catálogo") com as fotos das peças,
// mas ainda não temos a exportação. Por isso todos os produtos abaixo estão com
// `imagem: null` e usam `corSwatch` como fallback visual (com textura de tecido).
//
// QUANDO AS FOTOS CHEGAREM: basta preencher o campo `imagem` de cada produto
// com o caminho da foto (ex.: '/produtos/vestido-midi.jpg' em /public, ou um
// import). NÃO é preciso mexer em nenhum componente, o card já detecta a foto
// e mostra ela no lugar do swatch automaticamente.
// ============================================================================

export const PRODUTOS = [
  {
    id: 'vestido-midi-alfaiataria',
    nome: 'Vestido Midi Alfaiataria',
    descricao: 'Vinho · tecido estruturado',
    categoria: 'Vestidos',
    preco: 189,
    imagem: null,
    corSwatch: 'linear-gradient(160deg,#7c2740,#4f1526)',
  },
  {
    id: 'conjunto-cropped-saia',
    nome: 'Conjunto Cropped e Saia',
    descricao: 'Areia · malha canelada',
    categoria: 'Conjuntos',
    preco: 159,
    imagem: null,
    corSwatch: 'linear-gradient(160deg,#c9b28c,#a5865a)',
  },
  {
    id: 'blusa-gola-alta-tricot',
    nome: 'Blusa Gola Alta Tricot',
    descricao: 'Off-white · tricô leve',
    categoria: 'Blusas',
    preco: 99,
    imagem: null,
    corSwatch: 'linear-gradient(160deg,#f2ead9,#d9cdb4)',
  },
  {
    id: 'saia-longa-fenda',
    nome: 'Saia Longa com Fenda',
    descricao: 'Verde musgo · viscose',
    categoria: 'Saias',
    preco: 129,
    imagem: null,
    corSwatch: 'linear-gradient(160deg,#7a815f,#525838)',
  },
  {
    id: 'macacao-pantalona',
    nome: 'Macacão Pantalona',
    descricao: 'Preto · crepe fluido',
    categoria: 'Macacões',
    preco: 219,
    imagem: null,
    corSwatch: 'linear-gradient(160deg,#3a352f,#1c1915)',
  },
  {
    id: 'vestido-chemise-linho',
    nome: 'Vestido Chemise Linho',
    descricao: 'Terracota · linho misto',
    categoria: 'Vestidos',
    preco: 179,
    imagem: null,
    corSwatch: 'linear-gradient(160deg,#b56a4a,#8a4530)',
  },
  {
    id: 'conjunto-alfaiataria-short',
    nome: 'Conjunto Blazer e Short',
    descricao: 'Bordô · alfaiataria',
    categoria: 'Conjuntos',
    preco: 239,
    imagem: null,
    corSwatch: 'linear-gradient(160deg,#6e2136,#45141f)',
  },
  {
    id: 'blusa-ombro-so',
    nome: 'Blusa Ombro Só',
    descricao: 'Dourado · canelado',
    categoria: 'Blusas',
    preco: 89,
    imagem: null,
    corSwatch: 'linear-gradient(160deg,#c39a55,#9a7436)',
  },
  {
    id: 'colar-camadas-dourado',
    nome: 'Colar de Camadas',
    descricao: 'Dourado · folheado',
    categoria: 'Acessórios',
    preco: 59,
    imagem: null,
    corSwatch: 'linear-gradient(160deg,#cbae6e,#a07f3e)',
  },
]
