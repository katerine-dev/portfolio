# Portfólio — Katerine Dev

Meu portfólio pessoal com projetos, habilidades e formas de contato.

## Demo
[Acesse aqui](https://katerine-dev.github.io/portfolio/)

---

## Screenshot / Capa

![Preview do Portfólio](public/images/portfolio-cover.png)


## Sobre
Olá! Sou a Katerine, desenvolvedora Front‑End focada em React, Vite e Styled Components. Aqui mostro projetos reais, código e deploys. Estou aberta a oportunidades remotas e colaborações.

---

## Funcionalidades
- Página inicial com resumo e foto pessoal.
- Seção **Projetos** com descrição, tecnologias e links (GitHub / Demo).
- Seção **Habilidades** com principais stacks (React, Styled Components, etc).
- Responsividade para mobile e desktop.

---

## Tecnologias
- React + Vite
- Styled Components
- JavaScript / ES Modules
- Git / GitHub Pages

---

## Como rodar localmente

**Pré-requisitos:** Node.js (>=18) e npm.

```bash
# limpar dependências antigas
rm -rf node_modules

# instalar dependências (usa lockfile se existir)
npm ci || npm install

# otimizar imagens antes do build (gera AVIF/WEBP/JPEG e backup das originais)
npm run images:optimize

# build de produção
npm run build

# checar build localmente (Vite)
npx vite preview --port 4173
```

Para auditar performance após o preview estar rodando:

```bash
lighthouse http://localhost:4173 --preset=mobile --output=json --output-path=report.json
```

---

## Estrutura de diretórios


```
/
├─ public/
│  ├─ assets/
│  │  ├─ images/               # versões otimizadas geradas pelo script
│  │  └─ images-src/           # originais (usados como input)
│  └─ index.html
├─ scripts/
│  └─ optimize-images.mjs      # pipeline AVIF/WEBP/JPEG
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ data/
│  ├─ styles/
│  └─ main.jsx
├─ .github/workflows/
│  └─ optimize-and-deploy.yml
├─ package.json
└─ README.md
```

---

## Deploy
- O deploy automático roda no push para `main` via workflow `optimize-and-deploy.yml`, publicando em `gh-pages`.
- Para headers de cache imutáveis em plataformas como Netlify, veja `docs/DEPLOY.md`.