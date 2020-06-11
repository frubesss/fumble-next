import React from "react";
import styled from "styled-components";

import FactCardsContainer from "../../components/FactCards";

const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: #0f0a3a;
`;

export default function FactCards() {
  return (
    <Container>
      <FactCardsContainer />
    </Container>
  );
}
