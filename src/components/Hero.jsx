import React from 'react'
import styled from 'styled-components'
import ResponsiveImage from './ResponsiveImage'

const Section = styled.section`
  padding: 56px 0;
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items:center;

  @media(max-width:900px){
    grid-template-columns: 1fr;
    text-align:center;
    gap:16px;
  }
`

const Photo = styled.div`
  width:100%;
  max-width:520px;
  margin:0 auto;
`

const Title = styled.h1`
  font-size: clamp(28px, 6vw, 64px);
  margin:0 0 12px;
  line-height:0.9;
`

const Desc = styled.p`
  color:var(--muted);
  margin-bottom:20px;
`

const CTA = styled.a`
  display:inline-block;
  padding:12px 20px;
  border-radius:999px;
  background:var(--text);
  color:#fff;
  font-weight:700;
`

export default function Hero(){
  return (
    <Section id="home" className="container">
      <Photo>
        <ResponsiveImage fileName="perfil" alt="Katerine profile" priority width="720" height="480" />
      </Photo>
      <div>
        <Title>Desenvolvedora Front-End</Title>
        <Desc>Crio interfaces limpas, acessíveis e com foco em performance — React, hooks, componentes reusáveis e atenção aos detalhes.</Desc>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <CTA href="#contact">Vamos Conversar</CTA>
          <a href="#projects" style={{color:'var(--muted)', fontWeight:700}}>Ver Projetos →</a>
        </div>
      </div>
    </Section>
  )
}
