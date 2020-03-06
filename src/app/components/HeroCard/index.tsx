import * as React from "react";
import styled from "styled-components";
import {
  Container,
  Card,
  Cardimage,
  TextContainer,
  Herotext,
  Text
} from "./style";

interface IHeroCardProps {
  name: string;
  imgUrl: string;
  description: string;
  speed: number;
  backStory: string;
  strength: number;
  weakness: number;
  stamina: number;
  intelligence: number;
  agility: number;
}

export const HeroCard: React.FC<IHeroCardProps> = ({
  name,
  imgUrl,
  strength,
  weakness,
  stamina,
  speed
}) => {
  return (
    <Container>
      <Card>
        <Cardimage>
          <img src={imgUrl} alt="img" />
        </Cardimage>
        <TextContainer>
          <Herotext>Name: {name}</Herotext>
          <Text>Strenght: {strength}</Text>
          <Text>Weakness: {weakness}</Text>
          <Text>Stamina: {stamina}</Text>
          <Text>Speed: {speed}</Text>
        </TextContainer>
      </Card>
    </Container>
  );
};
