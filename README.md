# Jack Passos Closet

Site catálogo (estático) da Jack Passos Closet, loja física de moda feminina no
Jundiaí, Anápolis-GO. Substitui o Linktree: catálogo visual que leva o cliente
do Instagram/Google direto pro WhatsApp.

## Stack

- Vite + React + Tailwind CSS
- Sem backend. Produtos ficam em `src/data/produtos.js`
- Contato via WhatsApp (`wa.me`) e Instagram
- Deploy: Vercel

## Rodar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Fotos dos produtos (pendência)

Os produtos em `src/data/produtos.js` estão com `imagem: null` e usam um swatch
de cor como fallback. Quando as fotos da pasta "Catálogo" (Google Drive)
chegarem, basta preencher o campo `imagem` de cada produto. Nenhum componente
precisa mudar.
