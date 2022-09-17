import React from "react";
import { Container, Logo } from "./Home.styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import Text from "@components/text/Text";
const Home = () => {
  return (
    <Container>
      <Logo source={logoImg} />
      <Text variant="black" color="text">
        Home
      </Text>
    </Container>
  );
};

export default Home;
