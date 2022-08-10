import '../../styles/globals.css';
import { StyledEngineProvider } from '@mui/material'
// import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return <StyledEngineProvider injectFirst>
    {/* <ThemeProvider> */}
      <Component {...pageProps} />
    {/* </ThemeProvider> */}
  </StyledEngineProvider>
}

export default MyApp
