import * as React from "react";
import styled from "styled-components";

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

const Container = styled.div`
  padding: 10px;
`;

const Card = styled.div`
  cursor: pointer;
  transition: 0.4s;
  border-radius: 20px;
  &:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  }
  width: 350px;
  background: black;
`;

const Cardimage = styled.div`
  width: inherit;
  height: inherit;
  img {
    object-fit: cover;
    width: 350px;
    height: 200px;
  }
`;

const TextContainer = styled.div`
  padding-bottom: 14px;
`;

const Herotext = styled.div`
  font-weight: bold;
  textalign: left;
  padding-left: 8px;
  color: white;
  padding-bottom: 5px;
  font-size: 20px;
`;

const Text = styled.div`
  font-weight: bold;
  textalign: left;
  padding-left: 8px;
  color: white;
  font-size: 15px;
  padding-bottom: 2px;
`;

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
