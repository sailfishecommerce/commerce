/* eslint-disable @next/next/no-page-custom-font */
// import "../lib/wdyr";
import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Script from "next/script";
import type { AppProps } from "next/app";
import "@/styles/index.css";
import { ReactQueryDevtools } from "react-query/devtools";

import store from "@/redux/store";

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
    <>
      <Script
        onLoad={() => console.log("vbout-loaded")}
        strategy="lazyOnload"
        id="vboutTrackingCodeScript"
      >
        {`
          var _vbset = _vbset || [];
          _vbset.push(['_account', 'VBT-43304-6887']);
          _vbset.push(['_domain', 'https://livehealthy.hk']);

          (function() {
            var vbt = document.createElement('script'); vbt.type = 'text/javascript'; vbt.async = true; 
            vbt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.vbt.io/tracker?_account='+_vbset[0][1]+'&_domain='+_vbset[1][1];var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vbt, s);
          })();
        `}
      </Script>
      <Script
        src="https://en.trustmate.io/api/widget/4420c1ed-e3a7-47c2-b6a2-2d7386a819da/script"
        strategy="lazyOnload"
        id="trustmate-widget-1-script"
      />
      <Script
        src="https://en.trustmate.io/api/widget/01739a85-4698-4d4c-90d5-876048fba847/script"
        strategy="lazyOnload"
        id="trustmate-widget-2-script"
      />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default MyApp;
