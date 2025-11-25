# Deploy & Cache

## GitHub Pages
- O workflow `.github/workflows/optimize-and-deploy.yml` já executa `npm run images:optimize` e `npm run build` e publica o conteúdo da pasta `dist` na branch `gh-pages` via `peaceiris/actions-gh-pages@v4`.
- GitHub Pages não permite configurar cabeçalhos de cache avançados; os assets recebem TTL curto e `index.html` não pode ser marcado como imutável.

## Alternativas com cache agressivo
Se quiser atingir cache mais longo (melhor para Core Web Vitals), considere migrar para Netlify, Cloudflare Pages ou Vercel. Exemplos para Netlify:

```
/ assets/*
  Cache-Control: public, max-age=31536000, immutable
/index.html
  Cache-Control: no-cache
```

Coloque o snippet acima em um arquivo `_headers` na raiz gerada (`dist/_headers`) antes do deploy.