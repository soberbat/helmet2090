import React from "react";
import { Card, CardContainer, Wrapper } from "./SectionTwo.styles";

const SectionTwo = () => {
  return (
    <Wrapper>
      <CardContainer>
        <Card flex={1}>qaa</Card>
        <Card flex={2}>aa</Card>
      </CardContainer>

      <CardContainer>
        <Card flex={2}>qaa</Card>
        <Card flex={2}>aa</Card>
      </CardContainer>
      <CardContainer>
        <Card flex={1}>qaa</Card>
        <Card flex={2}>aa</Card>
      </CardContainer>

      <CardContainer>
        <Card flex={4}>qaa</Card>
        <Card flex={1}>aa</Card>
      </CardContainer>
    </Wrapper>
  );
};

export default SectionTwo;
