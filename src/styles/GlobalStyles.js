import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{
    --bg: #fffcef;
    --accent: #5fc799;
    --text: #0b0b0b;
    --muted: #6b6b6b;
    --card: #ffffff;
  }

  *{box-sizing:border-box}
  html,body,#root{height:100%}
  body{
    margin:0;
    font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background:var(--bg);
    color:var(--text);
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    scroll-behavior: smooth;
  }

  a { color: inherit; text-decoration: none; }
  img { max-width:100%; display:block; }

  /* container helpers */
  .container{
    width: min(1120px, 92%);
    margin: 0 auto;
  }
`

export default GlobalStyles
