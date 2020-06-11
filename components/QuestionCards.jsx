import React from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

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
  height: 400px;
  border-radius: 20px;
  text-align: left;
  cursor: grab;
`;

const CardContainer = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  color: #160f57;
  font-size: 40px;
`;

const Description = styled.p`
  color: #160f57;
`;

function QuestionCardsContainer() {
  const data = [
    {
      question: "Who is the best developer at Totallymoney?",
      answer: "Craig Robertson",
    },
    {
      question: "Who is the best developer at Totallymoney?",
      answer: "Craig Robertson",
    },
    {
      question: "Who is the best developer at Totallymoney?",
      answer: "Craig Robertson",
    },
    {
      question: "Who is the best developer at Totallymoney?",
      answer: "Craig Robertson",
    },
    {
      question: "Who is the best developer at Totallymoney?",
      answer: "Craig Robertson",
    },
  ];

  const swiped = () => {};

  const outOfFrame = () => {};

  return (
    <AppContainer>
      {data.map((item) => (
        <StyledTinderCard
          key={item.question}
          onSwipe={() => swiped()}
          onCardLeftScreen={() => outOfFrame()}
        >
          <StyledCard>
            <CardContainer>
              <Title>{item.question}</Title>
              <Description>{item.answer}</Description>
            </CardContainer>
          </StyledCard>
        </StyledTinderCard>
      ))}
    </AppContainer>
  );
}

export default QuestionCardsContainer;
