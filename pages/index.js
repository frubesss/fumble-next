import Head from "next/head";
import React from "react";

import FactCards from "../components/FactCards";

export default function App() {
  return (
    <>
      <Head>
        <title>Fumble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FactCards />
    </>
  );
}
