import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import Airtable from "airtable";

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
  const base = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY);
  const [items, setItems] = useState([]);
  useEffect(() => {
    base("Cards")
      .select()
      .firstPage(function (err, records) {
        const recordFields = records.map((record) => record.fields);
        setItems(recordFields);
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
            <Text variant="bodyCopySmall">{item.CardDescription}</Text>
          </StyledCard>
        </StyledTinderCard>
      ))}
    </AppContainer>
  );
}

export default FactCards;
