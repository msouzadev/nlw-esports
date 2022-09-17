import React from "react";
import { Container, Cover, Footer } from "./GameCard.styles";
import { ImageSourcePropType, TouchableOpacityProps } from "react-native";
import Text from "@components/text/Text";
import { theme } from "src/theme";

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}
interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}
const GameCard = (props: Props) => {
  const { data, ...rest } = props;
  return (
    <Container {...rest}>
      <Cover source={data.cover}>
        <Footer colors={[theme.colors.footer1, theme.colors.footer2]}>
          <Text fontSize="md" variant="black">
            {data.name}
          </Text>
          <Text fontSize="sm" color="caption300">
            {data.ads} anuncios
          </Text>
        </Footer>
      </Cover>
    </Container>
  );
};

export default GameCard;
