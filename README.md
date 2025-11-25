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
# instalar dependências
npm install

# otimizar imagens antes do build (gera AVIF/WEBP/JPEG e backup das originais)
npm run images:optimize

# build de produção
npm run build

# checar build localmente (Vite)
npm run preview
```

---

## Estrutura de diretórios


```
/
├─ public/
│  ├─ images/
│  │  └─ portfolio-cover.png
│  └─ index.html
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ data/
│  ├─ styles/
│  └─ main.jsx
├─ .gitignore
├─ package.json
└─ README.md
```

---

## Deploy
- O deploy automático roda no push para `main` via workflow `optimize-and-deploy.yml`, publicando em `gh-pages`.
- Para headers de cache imutáveis em plataformas como Netlify, veja `docs/DEPLOY.md`.