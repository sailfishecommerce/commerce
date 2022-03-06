import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
            crossOrigin="true"
          />
        </Head>
        <Script
          onLoad={() => console.log("vbout-loaded")}
          strategy="lazyOnload"
          id="vboutTrackingCodeScript"
          nonce="QRTYPCVBFGXZ"
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
