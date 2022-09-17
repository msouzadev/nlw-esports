import React from "react";
import { Container, Logo } from "./Home.styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import Text from "@components/text/Text";
import Box from "@components/box/Box";
import GameCard from "@components/gameCard/GameCard";
import { GAMES } from "src/utils/games";
import { FlatList } from "react-native";

const Home = () => {
  return (
    <Container>
      <Logo source={logoImg} />
      <Box width="100%" p={32}>
        <Text variant="black" color="text" fontSize="lg">
          Encontre seu duo!
        </Text>
        <Text variant="regular" color="caption400" fontSize="md">
          Selecione o game que deseja jogar...
        </Text>
      </Box>
      <FlatList
        contentContainerStyle={{ paddingLeft: 32, paddingRight: 64 }}
        showsHorizontalScrollIndicator
        horizontal
        keyExtractor={(item) => item.id}
        data={GAMES}
        renderItem={({ item }) => <GameCard data={item} />}
      />
    </Container>
  );
};

export default Home;
