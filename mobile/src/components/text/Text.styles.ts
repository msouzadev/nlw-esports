import styled, { css } from "styled-components/native";
import { Theme } from "../../theme";
import { Colors } from "../../theme/colors";
type Variant = "regular" | "bold" | "black";
const textVariants = (theme: Theme, variant: Variant) => {
  const variants = {
    regular: {
      "font-family": theme.fontFamily.regular,
      color: theme.colors.text,
      fontSize: `${theme.fontSize.sm}px`,
    },
    black: {
      "font-family": theme.fontFamily.black,
      color: theme.colors.text,
      fontSize: `${theme.fontSize.lg}px`,
    },
    semi: {
      "font-family": theme.fontFamily.semiBold,
      fontSize: `${theme.fontSize.md}px`,
      color: theme.colors.caption300,
    },
    bold: {
      "font-family": theme.fontFamily.bold,
      fontSize: `${theme.fontSize.md}px`,
      color: theme.colors.caption300,
    },
  };
  return variants[variant] || variants.regular;
};
export const StyledText = styled.Text<{
  variant: Variant;
  color: keyof typeof Colors;
}>`
  ${({ theme, variant, color }) => css`
    ${textVariants(theme, variant)};
    color: ${theme.colors[color] || theme.colors.text};
  `}
`;
