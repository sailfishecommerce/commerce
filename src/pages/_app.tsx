/* eslint-disable @next/next/no-page-custom-font */
// import "../lib/wdyr";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "react-query/devtools";
import store from "@/redux/store";
import "@/styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
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
