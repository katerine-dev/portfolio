// src/components/About.jsx
import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 160px 0 48px;
  background: transparent;

  .container-inner {
    width: min(1120px, 92%);
    margin: 0 auto;
    display: grid;
    /* coluna principal flexível + coluna de infos fixa */
    grid-template-columns: 1fr 360px;
    gap: 28px;
    align-items: start;

    margin-top: 8px;
  }

  @media (max-width: 900px) {
    padding: 64px 0 32px;
    .container-inner {
      grid-template-columns: 1fr;
      gap: 16px;
      text-align: center;
      margin-top: 0;
    }
  }
  .col {
    min-width: 0;
  }

  h2 {
    margin: 0 0 12px 0;
    font-size: 28px;
    line-height: 1.05;
  }

  p {
    color: var(--muted);
    line-height: 1.6;
    margin: 0 0 8px 0;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: var(--muted);
    li { margin-bottom: 8px; }
  }

  img, figure, .media {
    max-width: 100%;
    height: auto;
    display: block;
  }
`

export default function About(){
  return (
    <Section id="about">
      <div className="container-inner">
        <div className="col">
          <h2>Sobre <span style={{fontStyle:'italic', color:'var(--accent)'}}>mim</span></h2>
          <p>
            Sou desenvolvedora front-end com formação em Ciência da Computação e formada no profissionalizante em Front-End pela EBAC.
            Trabalho com React, Vite/Next e já implementei micro-frontends e integrações com Supabase.
          </p>
          <p style={{marginTop:12}}>
            Gosto de transformar requisitos complexos em interfaces claras, performáticas e acessíveis.
          </p>
        </div>

        <div className="col">
          <ul>
            <li><strong>Local:</strong> Jundiaí / SP</li>
            <li><strong>Stack:</strong> React · TypeScript · FastAPI · PostgreSQL · Docker · Vite · Next.js · Tailwind · WordPress/Elementor</li>
            <li><strong>Interesse:</strong> APIs robustas · Performance de backend/frontend · Observabilidade</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
