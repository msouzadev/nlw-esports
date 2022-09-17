import React from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "./Loading.styles";
import { theme } from "../../theme";
const Loading = () => (
  <Container>
    <ActivityIndicator color={theme.colors.primary} />
  </Container>
);

export default Loading;
