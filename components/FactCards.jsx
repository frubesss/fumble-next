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
  max-width: 260px;
  min-height: 400px;
  border-radius: 20px;
  text-align: left;
  cursor: grab;
`;

const CardContainer = styled.div`
  padding: 32px;
`;

function FactCards() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://g4p99w1vq4.execute-api.eu-west-1.amazonaws.com/prod/cards")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const data = [
    {
      title: "Craig Robertson",
      description: "Loves donuts, mainly Jam donuts",
    },
    {
      title: "Barry Scott",
      description: "Loves donuts, mainly Jam donuts",
    },
    {
      title: "Tezza Williams",
      description: "Loves donuts, mainly Jam donuts",
    },
    {
      title: "Mathew Donnayyy",
      description: "Loves donuts, mainly Jam donuts",
    },
    {
      title: "Henery Smith",
      description: "Loves donuts, mainly Jam donuts",
    },
  ];

  const swiped = () => {};

  const outOfFrame = () => {};

  return (
    <AppContainer>
      {data.map((item) => (
        <StyledTinderCard
          key={item.title}
          onSwipe={() => swiped()}
          onCardLeftScreen={() => outOfFrame()}
        >
          <StyledCard>
            <CardContainer>
              <Heading as="h2" variant="h3">
                {item.title}
              </Heading>
              <Text variant="bodyCopySmall">{item.description}</Text>
            </CardContainer>
          </StyledCard>
        </StyledTinderCard>
      ))}
    </AppContainer>
  );
}

export default FactCards;
