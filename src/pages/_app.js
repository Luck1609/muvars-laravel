import "../../styles/globals.css";
import { StyledEngineProvider } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import FormModal from "components/widgets/modal";
import Alert from "components/widgets/alert";
import { Provider } from "react-redux";
import { Store } from "hooks/redux/store";
import { SWRConfig } from "swr";
import HttpReq from "helpers/axios";
import NoticeModal from "components/widgets/notice_modal";
import AuthModal from "components/pages/auth/auth_modal";
import StepModal from "components/widgets/step_modal";

const http = new HttpReq();

export default function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  
  const fetcher = async (url) =>
    await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://api.rudragh.com'}${url}`);

  return (
    <StyledEngineProvider injectFirst>
      <Provider store={Store}>
        <SWRConfig value={{ fetcher }}>
          <FormModal />
          <StepModal />
          <AuthModal />
          <Alert />
          <NoticeModal />
          <Component pageProps={pageProps} />
        </SWRConfig>
      </Provider>
    </StyledEngineProvider>
  );
}