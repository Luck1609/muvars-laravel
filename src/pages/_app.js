import '../../styles/globals.css';
import { StyledEngineProvider } from '@mui/material'
import FormModal from 'components/widgets/modal'
import NoticeModal from 'components/widgets/notice_modal'
import { Provider } from 'react-redux';
import { Store } from 'hooks/redux/store';
import StepModal from 'components/widgets/step_modal';
// import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return <StyledEngineProvider injectFirst>
    {/* <ThemeProvider> */}
      <Provider store={Store}>
          <FormModal />
          <StepModal />
          {/* <NoticeModal /> */}
          <Component {...pageProps} />
      </Provider>
    {/* </ThemeProvider> */}
  </StyledEngineProvider>
}

export default MyApp
