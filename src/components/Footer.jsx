import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
  padding:32px 0;
  text-align:center;
  color:var(--muted);
`

export default function Footer(){
  return (
    <Foot>
      <div className="container">
        <p>© {new Date().getFullYear()} Katerine Witkoski — Front-End Developer</p>
        <p style={{marginTop:8}}><a href="https://github.com/katerine-dev" target="_blank" rel="noreferrer">GitHub</a> • <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </div>
    </Foot>
  )
}
