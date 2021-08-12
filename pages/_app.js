import { createGlobalStyle, ThemeProvider } from 'styled-components'
import AlertContext from '../context/alertContext'
import { smallScreen } from '../style/sizeVariables'

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
  scroll-behavior: smooth;
 
  @media only screen and (max-width: ${smallScreen}){
    font-size: 50%;
  }
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
    bgColorTransparent: 'rgba(53, 73, 95, 0.9)',
    primary: '#42B883',
    secondary: '#4C6885',
    textColor: 'whitesmoke',
    textColorSecondary: '#cfcfcf',
    input: '#eaeaea',
  },
  filter: {
    shadowSmall: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    shadowMedium: 'drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25))',
    shadowBig: 'drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.25))',
    shadowStrong: 'drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.8))',
  },
  boxShadow: {
    shadowSmall: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);',
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AlertContext>
          <Component {...pageProps} />
        </AlertContext>
      </ThemeProvider>
    </>
  )
}
