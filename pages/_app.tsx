import type { AppProps } from "next/app";
import { useContext } from "react";
import AppContext from "../src/state/AppState/AppContext";
import AppContextProvider from "../src/state/AppState/AppContextProvider";
import useApp from "../src/state/AppState/useApp";
import { SectionHelper } from "../src/components/Flow/Flow.syled";
import LottiePlayer from "../src/components/LottiePlayer/LottiePlayer";
import GlobalStyle from "../src/styled/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <LottiePlayer />
      </AppContextProvider>
    </>
  );
}

export default MyApp;
