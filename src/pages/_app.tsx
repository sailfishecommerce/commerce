/* eslint-disable @next/next/no-page-custom-font */
// import "../lib/wdyr";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import AOS from "aos";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import { ReactQueryDevtools } from "react-query/devtools";

import type { AppProps } from "next/app";
import store from "@/redux/store";
import "@/styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
