import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: #0f0a3a;
`;

const WelcomeCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WelcomeCard = styled.div`
  background-color: #fff;
  width: 260px;
  height: 400px;
  border-radius: 20px;
  text-align: left;
  cursor: pointer;
  padding: 16px;
  margin-right: 40px;
`;

const Text = styled.h2`
  color: #160f57;
  font-size: 40px;
`;

export default function App() {
  return (
    <>
      <Head>
        <title>Fumble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <WelcomeCardContainer>
          <Link href="/factcards">
            <WelcomeCard>
              <Text>Facts</Text>
            </WelcomeCard>
          </Link>
          <Link href="/questioncards">
            <WelcomeCard>
              <Text>Questions</Text>
            </WelcomeCard>
          </Link>
        </WelcomeCardContainer>
      </Container>
    </>
  );
}
