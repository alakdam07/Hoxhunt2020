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

const Card = styled.div`
  cursor: pointer;
  transition: 0.4s;
  border-radius: 20px;
  &:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  }
`;

const Cardimage = styled.div`
  width: inherit;
  height: inherit;
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
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
    <div style={{ padding: "10px" }}>
      <Card style={{ width: "350px", background: "black" }}>
        <Cardimage>
          <img
            src={imgUrl}
            alt="img"
            style={{ width: "350px", height: "200px" }}
          />
        </Cardimage>
        <span
          style={{
            fontWeight: "bold",
            textAlign: "left",
            paddingLeft: "8px",
            color: "white",
            fontSize: "20px"
          }}
        >
          Name: {name}
        </span>
        <br></br>
        <br></br>
        <span
          style={{
            fontWeight: "bold",
            textAlign: "left",
            paddingLeft: "8px",
            color: "white"
          }}
        >
          Strenght: {strength}
        </span>
        <br></br>
        <span
          style={{
            fontWeight: "bold",
            textAlign: "left",
            paddingLeft: "8px",
            color: "white"
          }}
        >
          Weakness: {weakness}
        </span>
        <br></br>
        <span
          style={{
            fontWeight: "bold",
            textAlign: "left",
            paddingLeft: "8px",
            color: "white"
          }}
        >
          Stamina: {stamina}
        </span>
        <br></br>
        <span
          style={{
            fontWeight: "bold",
            textAlign: "left",
            paddingLeft: "8px",
            color: "white"
          }}
        >
          Speed: {speed}
        </span>
        <br></br>
        <br></br>
      </Card>
    </div>
  );
};
