import Head from "next/head";
import React from "react";
import styled from "styled-components";
import FactCards from "../components/FactCards";

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: #0f0a3a;
`;

export default function App() {
  return (
    <>
      <Head>
        <title>Fumble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <FactCards />
      </Container>
    </>
  );
}
