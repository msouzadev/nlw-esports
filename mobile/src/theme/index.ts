import { Colors, ColorsTheme } from "./colors";

interface FontFamily {
  regular: string;
  semiBold: string;
  bold: string;
  black: string;
}
export interface FontSize {
  sm: number;
  md: number;
  lg: number;
}
export interface Theme {
  colors: ColorsTheme;
  fontFamily: FontFamily;
  fontSize: FontSize;
}
export const theme: Theme = {
  colors: Colors,
  fontFamily: {
    regular: "Inter_400Regular",
    semiBold: "Inter_600SemiBold",
    bold: "Inter_700Bold",
    black: "Inter_900Black",
  },

  fontSize: {
    sm: 14,
    md: 16,
    lg: 24,
  },
};
