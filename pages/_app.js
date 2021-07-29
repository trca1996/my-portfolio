import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  // This defines what 1rem is -- 10px --
  font-size: 62.5%;
 
}

body {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: whitesmoke
}
`

const theme = {
  colors: {
    bgColor: '#35495E',
    primary: '#42B883',
    secondary: '#4C6885',
    textColor: 'whitesmoke',
  },
  filter: {
    shadowSmall: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    shadowMedium: 'drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25))',
    shadowBig: 'drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.25));',
  },
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);',
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
