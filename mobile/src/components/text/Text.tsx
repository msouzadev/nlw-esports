import React from "react";
import { TextProps, Text } from "react-native";
import { Colors } from "../../theme/colors";
import { StyledText } from "./Text.styles";

interface CustomTextProps extends TextProps {
  variant?: "regular" | "bold" | "black" | "semi";
  color?: keyof typeof Colors;
}
const CustomText = (props: CustomTextProps) => {
  const { children, ...rest } = props;
  return <StyledText {...rest}>{children}</StyledText>;
};

export default CustomText;
