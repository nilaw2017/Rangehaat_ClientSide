import Footer from "../components/Footer.js";
import Layout from "../components/Layout.js";
import Head from "next/head";

import "../styles/globals.scss";
// import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RangeHaat</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
