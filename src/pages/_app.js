import "../../styles/globals.css";
import { StyledEngineProvider } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import FormModal from "components/widgets/modal";
import Alert from "components/widgets/alert";
import { Provider } from "react-redux";
import { Store } from "hooks/redux/store";
import { SWRConfig } from "swr";
import HttpReq from "helpers/axios";
import NoticeModal from "components/widgets/notice_modal";
// import Guarded from "components/routes/guarded";
// import Unguarded from "components/routes/unguarded";
import AuthModal from "components/pages/auth/auth_modal";

const http = new HttpReq();

export default function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  
  const fetcher = async (url) =>
    await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`);

  return (
    <StyledEngineProvider injectFirst>
      <SessionProvider session={session}>
        <Provider store={Store}>
          <SWRConfig value={{ fetcher }}>
            <FormModal />
            <AuthModal />
            <Alert />
            <NoticeModal />
            <Component pageProps={pageProps} />
          </SWRConfig>
        </Provider>
      </SessionProvider>
    </StyledEngineProvider>
  );
}