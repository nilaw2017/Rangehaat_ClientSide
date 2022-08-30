import Footer from "../components/Footer.js";
import Layout from "../components/Layout.js";
import Head from "next/head";

import "../styles/globals.scss";
// import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="news, nepal, nepali, technology, corruption, daily_news"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
