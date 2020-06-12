import Head from "next/head";
import React from "react";

import FactCards from "../components/FactCards";

export default function App() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://d3tbpaf5tfzpa.cloudfront.net/buenos-aires.css"
        />

        <link
          rel="stylesheet"
          href="https://d3tbpaf5tfzpa.cloudfront.net/source-sans-pro.css"
        />
        <title>Fumble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FactCards />
    </>
  );
}
