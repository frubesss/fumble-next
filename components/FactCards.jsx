import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import Airtable from "airtable";

import Heading from "@totallymoney/ui/components/Heading";
import Text from "@totallymoney/ui/components/Text";
import shuffleArray from "./utils/suffleArray";

const AppContainer = styled.div`
  width: 80vw;
  height: 60vh;
  position: relative;
  max-width: 375px;
  max-height: 533px;
`;

const StyledTinderCard = styled(TinderCard)`
  position: absolute;
  &:first-child {
    transform: rotate(5deg);
  }
`;

const StyledCard = styled.div`
  padding: 32px;
  min-height: 300px;
  border-radius: 10px;
  cursor: grab;
  background: ${(props) => props.colour};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function FactCards({ shuffledCards }) {
  const colours = [
    "#d6d8f0",
    "#ff9f8c",
    "#3de5b2",
    "#f8f473",
    "#fff",
    "#cccbd4",
    "#ff826a",
    "#3de5b2",
    "#ede5e3",
  ];

  const swiped = () => {};

  const outOfFrame = () => {};

  return (
    <AppContainer>
      {shuffledCards.map((card) => (
        <StyledTinderCard
          key={card.cardTitle}
          onSwipe={() => swiped()}
          onCardLeftScreen={() => outOfFrame()}
        >
          <StyledCard
            colour={colours[Math.floor(Math.random() * colours.length)]}
          >
            <Heading as="h2" variant="h4">
              {card.cardTitle}
            </Heading>
            <Text variant="bodyCopySmall">{card.cardDescription}</Text>
          </StyledCard>
        </StyledTinderCard>
      ))}
    </AppContainer>
  );
}

export default FactCards;
