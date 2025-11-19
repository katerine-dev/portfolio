import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  background: #9eb71f;
  color: #071010; 
  padding: 64px 0;

  .container-inner{
    width: min(1120px, 92%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: 48px;
    align-items: center;
  }

  .hero-title{
    font-weight: 800;
    font-size: clamp(36px, 6vw, 72px);
    line-height: 0.92;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: #071010;
  }

  .hero-title .accent {
    font-style: italic;
    color: #ffffff;
    margin-left: 8px;
    font-weight: 800;
  }

  .lead {
    font-size: clamp(18px, 2.2vw, 28px);
    line-height: 1.3;
    color: rgba(7,16,16,0.95);
    margin: 0;
    max-width: 62ch;
    font-weight: 600;
  }

  @media (max-width: 900px) {
    padding: 48px 0;
    .container-inner {
      grid-template-columns: 1fr;
      gap: 20px;
      text-align: center;
    }
    .hero-title { font-size: clamp(28px, 8vw, 42px); line-height:1; }
    .hero-title .accent { display:block; margin-left:0; margin-top:6px; color:#fff; }
    .lead { font-size: 16px; max-width: none; margin: 0 auto; }
  }
`

export default function About(){
  return (
    <Section id="about" aria-label="Sobre mim">
      <div className="container-inner">
        <div>
          <h2 className="hero-title">
            Sobre <span className="accent">mim</span>
          </h2>
        </div>

        <div>
          <p className="lead">
            Sou desenvolvedora front-end com formação em Ciência da Computação e formação profissional em Front-End pela EBAC.
            Trabalho com React, TypeScript e ferramentas modernas (Vite / Next) — entrego interfaces performáticas, acessíveis e fáceis de manter.
          </p>
        </div>
      </div>
    </Section>
  )
}
