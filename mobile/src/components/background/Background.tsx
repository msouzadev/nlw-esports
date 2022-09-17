import React from "react";
import { View } from "react-native";
import { Container } from "./Background.styles";
import backgroundImg from "../../assets/background-galaxy.png";

interface BackgroundProps {
  children: React.ReactElement;
}
const Background = ({ children }: BackgroundProps) => {
  return (
    <Container defaultSource={backgroundImg} source={backgroundImg}>
      {children}
    </Container>
  );
};

export default Background;
