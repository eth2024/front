import Head from "next/head";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>APP NAME</title>
        <meta name="description" content="APP" />
        <link rel="icon" href="/svgs/next-logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Web3, Coummunity" />
        <meta name="og:site_name" content="APP" />
        <meta name="og:title" content="Web3" />
        <meta name="og:description" content="" />
        <meta name="og:type" content="website" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
