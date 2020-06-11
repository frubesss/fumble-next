import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

import Heading from "@totallymoney/ui/components/Heading";
import Text from "@totallymoney/ui/components/Text";

const AppContainer = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTinderCard = styled(TinderCard)`
  position: absolute;
  &:first-child {
    transform: rotate(5deg);
  }
`;

const StyledCard = styled.div`
  background-color: #fff;
  min-width: 260px;
  min-height: 400px;
  border-radius: 20px;
  text-align: left;
  cursor: grab;
`;

const CardContainer = styled.div`
  padding: 32px;
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
            <CardContainer>
              <Heading as="h2" variant="h3">
                {item.CardTitle}
              </Heading>
              <Text variant="bodyCopySmall">{item.CardContent}</Text>
            </CardContainer>
          </StyledCard>
        </StyledTinderCard>
      ))}
    </AppContainer>
  );
}

export default FactCards;
