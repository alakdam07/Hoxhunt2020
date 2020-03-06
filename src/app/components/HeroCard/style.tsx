import * as React from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
`;

export const Card = styled.div`
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

export const Cardimage = styled.div`
  width: inherit;
  height: inherit;
  img {
    object-fit: cover;
    width: 350px;
    height: 200px;
  }
`;

export const TextContainer = styled.div`
  padding-bottom: 14px;
`;

export const Herotext = styled.div`
  font-weight: bold;
  textalign: left;
  padding-left: 8px;
  color: white;
  padding-bottom: 5px;
  font-size: 20px;
`;

export const Text = styled.div`
  font-weight: bold;
  textalign: left;
  padding-left: 8px;
  color: white;
  font-size: 15px;
  padding-bottom: 2px;
`;
