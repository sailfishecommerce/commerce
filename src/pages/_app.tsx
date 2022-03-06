/* eslint-disable @next/next/no-page-custom-font */
// import "../lib/wdyr";
import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import type { AppProps } from "next/app";
import "@/styles/index.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import store from "@/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const nonce = Buffer.from(uuidv4()).toString("base64");
  const registry = createStyleRegistry();
  const styles = registry.styles({ nonce });

  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      easing: "ease", // default easing for AOS animations
      delay: 500,
    });
    AOS.refresh();
  }, []);
  const persistor = persistStore(store);

  const queryClient = new QueryClient();
  return (
    <StyleRegistry registry={registry}>
      <Head>
        <meta property="csp-nonce" content={nonce} />
      </Head>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </StyleRegistry>
  );
}

export default MyApp;
