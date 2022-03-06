import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import flush from "styled-jsx/server";
import { v4 as uuidv4 } from "uuid";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const nonce = uuidv4();

    // https://github.com/vercel/next.js/blob/canary/packages/next/pages/_document.tsx#L89
    const { html, head } = await ctx.renderPage();
    // Adds `nonce` for style tags on Server Side Rendering
    const styles = [...flush({ nonce })];

    let contentSecurityPolicy = "";
    if (process.env.NODE_ENV === "production") {
      contentSecurityPolicy = `style-src 'nonce-${nonce}';`;
    } else {
      // react-refresh needs 'unsafe-eval'
      // Next.js needs 'unsafe-inline' during development https://github.com/vercel/next.js/blob/canary/packages/next/client/dev/fouc.js
      // Specifying 'nonce' makes a modern browsers ignore 'unsafe-inline'
      contentSecurityPolicy = `default-src 'self'; style-src 'unsafe-inline'; script-src 'self' 'unsafe-eval';`;
    }

    ctx.res.setHeader("Content-Security-Policy", contentSecurityPolicy);

    return { styles, html, head, nonce };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
            crossOrigin="true"
          />
          <meta property="csp-nonce" content={this.props.nonce} />
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
