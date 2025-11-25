import React from 'react'
import styled from 'styled-components'
import { FiArrowUpRight } from 'react-icons/fi'
import projects from '../data/projects'
import ResponsiveImage from './ResponsiveImage'

const Section = styled.section`
  padding: 64px 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.03), transparent);
`

const Container = styled.div`
  width: min(1120px, 92%);
  margin: 0 auto;
`

const Title = styled.h2`
  margin: 0 auto 28px;
  font-size: 28px;
  font-weight: 800;
  color: var(--text);
  text-align: center;
  width: 100%;

  span { color: var(--accent); }

  @media (max-width: 600px) { font-size: 22px; }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  margin-bottom: 28px;

  @media (max-width: 1100px) { grid-template-columns: 1fr; }
`

const Card = styled.article`
  background: transparent;
  border-radius: 12px;
  overflow: visible;
  display: flex;
  flex-direction: column;
`

const ThumbWrap = styled.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: #eee;
  box-shadow: 0 8px 20px rgba(2,10,12,0.04);

  @supports not (aspect-ratio: 4/3) {
    height: 0;
    padding-top: 75%;
  }

  img { width:100%; height:100%; object-fit:cover; display:block; }
`

const Meta = styled.div`
  margin-top: 12px;
  display:flex;
  flex-direction:column;
`

const Subtitle = styled.span`
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 6px;
`

const H3 = styled.h3`
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  color: var(--text);
`

const Desc = styled.p`
  margin: 12px 0 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.45;
`

const Tech = styled.div`
  margin-top: 10px;
  font-size: 13px;
  color: var(--muted);
`

const BtnRow = styled.div`
  display:flex;
  align-items:center;
  gap:14px;
  margin-top:18px;
  justify-content: flex-start;

  @media (max-width: 760px) {
    justify-content: center;
  }
`

const IconCircle = styled.a`
  width:44px;
  height:44px;
  border-radius:999px;
  background: var(--accent);
  color:#fff;
  display:inline-grid;
  place-items:center;
  text-decoration:none;
  box-shadow: 0 6px 18px rgba(2,10,12,0.08);
  flex:0 0 44px;
`

const CenterBtn = styled.div`
  text-align:center;
  margin-top: 24px;
  a {
    display:inline-block;
    padding:12px 22px;
    background: var(--accent);
    color:#fff;
    border-radius:999px;
    font-weight:700;
    text-decoration:none;
  }
`

export default function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-title">
      <Container>
        <Title id="projects-title">MEUS <span>PROJETOS</span></Title>

        <Grid>
          {projects.map((p) => (
            <Card key={p.id}>
              <ThumbWrap>
                <ResponsiveImage
                  fileName={p.imageFileName}
                  alt={p.title}
                  width="960"
                  height="720"
                  className="project-image"
                />
              </ThumbWrap>

              <Meta>
                <Subtitle>{p.subtitle}</Subtitle>
                <H3>{p.title}</H3>

                <Desc>{p.description}</Desc>
                <Tech>{p.tech.join(' • ')}</Tech>

                <BtnRow>
                  <IconCircle
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${p.title} no GitHub`}
                    title="Abrir no GitHub"
                  >
                    <FiArrowUpRight size={18} />
                  </IconCircle>
                </BtnRow>
              </Meta>
            </Card>
          ))}
        </Grid>

        <CenterBtn>
          <a href="https://github.com/katerine-dev?tab=repositories" target="_blank" rel="noopener noreferrer">
            Ver todos os projetos
          </a>
        </CenterBtn>
      </Container>
    </Section>
  )
}
