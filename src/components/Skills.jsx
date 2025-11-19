import React from 'react'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiVite } from 'react-icons/si'

const Section = styled.section`
  background: #9eb71f;
  color: #042422;
  padding: 64px 0 96px;
`

const Container = styled.div`
  width: min(1120px, 92%);
  margin: 0 auto;
`

const H2 = styled.h2`
  margin: 0 0 12px;
  font-size: 40px;
  font-weight: 800;
  color: #06201b;
  text-align: center;
  span { color: rgba(255,255,255,0.95); font-style: italic; }
`

const Lead = styled.p`
  margin: 0 auto 28px;
  color: rgba(6,32,27,0.9);
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  max-width: 920px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  margin: 28px 0 18px;

  @media (max-width: 1100px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`

const Card = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 18px;
  display: flex;
  gap: 14px;
  align-items: center;
  box-shadow: 0 8px 24px rgba(2,10,12,0.06);
`

const LogoWrap = styled.div`
  width:64px;
  height:64px;
  background: #f3fbf9;
  border-radius:50%;
  display:grid;
  place-items:center;
  flex: 0 0 64px;
`

const CardTitle = styled.div`
  font-weight:700;
  color: #06201b;
  font-size:18px;
`

const CardSub = styled.div`
  font-size:13px;
  color: #666;
`

const Chips = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 22px auto 0;
  max-width: 1120px;

  li {
    background: #fff;
    padding: 10px 14px;
    border-radius: 12px;
    font-weight: 600;
    box-shadow: 0 8px 18px rgba(2,10,12,0.06);
    color: #06201b;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
  }

  /* espaçamento extra para telas muito pequenas */
  @media (max-width: 420px) {
    gap: 8px;
    li { padding: 8px 10px; font-size: 14px; }
  }
`


export default function Skills(){
  const chips = ['CSS Modules','Styled-Components','TypeScript','Git','Supabase','Acessibilidade (a11y)','Micro-frontends','Performance']

  return (
    <Section id="skills" aria-labelledby="skills-title">
      <Container>
        <H2 id="skills-title">MINHAS <span>HABILIDADES</span></H2>
        <Lead>Principais tecnologias e competências — foco em front-end moderno e interfaces acessíveis.</Lead>

        <Grid>
          <Card>
            <LogoWrap><FaReact size={32} color="#61dafb" /></LogoWrap>
            <div>
              <CardTitle>React</CardTitle>
              <CardSub>Component-based UIs</CardSub>
            </div>
          </Card>

          <Card>
            <LogoWrap><SiJavascript size={32} color="#f0db4f" /></LogoWrap>
            <div>
              <CardTitle>JavaScript</CardTitle>
              <CardSub>ES6+ modern JS</CardSub>
            </div>
          </Card>

          <Card>
            <LogoWrap><SiNextdotjs size={32} color="#111" /></LogoWrap>
            <div>
              <CardTitle>Next.js</CardTitle>
              <CardSub>SSG / SSR / App Router</CardSub>
            </div>
          </Card>

          <Card>
            <LogoWrap><SiVite size={32} color="#646cff" /></LogoWrap>
            <div>
              <CardTitle>Vite</CardTitle>
              <CardSub>Fast dev & builds</CardSub>
            </div>
          </Card>
        </Grid>

        <Chips>
          {chips.map(c => <li key={c}>{c}</li>)}
        </Chips>
      </Container>
    </Section>
  )
}
