import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

import Heading from "@totallymoney/ui/components/Heading";
import Text from "@totallymoney/ui/components/Text";

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
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function FactCards() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://g4p99w1vq4.execute-api.eu-west-1.amazonaws.com/prod/cards")
      .then((res) => res.json())
      .then((result) => {
        setItems(result.Cards);
      });
  }, []);

  const swiped = () => {};

  const outOfFrame = () => {};

  return (
    <AppContainer>
      {items.map((item) => (
        <StyledTinderCard
          key={item.CardTitle}
          onSwipe={() => swiped()}
          onCardLeftScreen={() => outOfFrame()}
        >
          <StyledCard>
            <Heading as="h2" variant="h4">
              {item.CardTitle}
            </Heading>
            <Text variant="bodyCopySmall">{item.CardContent}</Text>
          </StyledCard>
        </StyledTinderCard>
      ))}
    </AppContainer>
  );
}

export default FactCards;
