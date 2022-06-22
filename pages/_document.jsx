import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="https://cdn-icons.flaticon.com/png/512/3256/premium/3256085.png?token=exp=1655910920~hmac=fd6abdf66e2a4bfce71c4ccf02f3c91e"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          {/* <i class="fab fa-github"></i> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
