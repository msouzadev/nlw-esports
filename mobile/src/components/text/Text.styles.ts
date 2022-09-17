import styled, { css } from "styled-components/native";
import { FontSize, Theme } from "../../theme";
import { Colors } from "../../theme/colors";
type Variant = "regular" | "bold" | "black";
const textVariants = (theme: Theme, variant: Variant) => {
  const variants = {
    regular: {
      "font-family": theme.fontFamily.regular,
    },
    black: {
      "font-family": theme.fontFamily.black,
    },
    semi: {
      "font-family": theme.fontFamily.semiBold,
    },
    bold: {
      "font-family": theme.fontFamily.bold,
    },
  };
  return variants[variant] || variants.regular;
};
export const StyledText = styled.Text<{
  variant: Variant;
  color: keyof typeof Colors;
  fontSize: keyof FontSize;
}>`
  ${({ theme, variant, color, fontSize }) => css`
    ${textVariants(theme, variant)};
    color: ${theme.colors[color] || theme.colors.text};
    font-size: ${theme.fontSize[fontSize] || theme.fontSize.md}px;
  `}
`;
