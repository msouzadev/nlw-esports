import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin-right: 24px;
`;

export const Cover = styled.ImageBackground`
  width: 240px;
  height: 320px;
  justify-content: flex-end;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const Footer = styled(LinearGradient)`
  width: 100%;
  height: 102px;
  padding: 16px;
  justify-content: flex-end;
`;
