// eslint-disable-next-line no-shadow
export enum Colors {
  background900 = "#121214",
  background800 = "#18181B",

  text = "#FFFFFF",

  caption500 = "#71717A",
  caption400 = "#A1A1AA",
  caption300 = "#D4D4D8",

  shape = "#2A2634",

  primary = "#8B5CF6",
  success = "#34D399",
  alert = "#F87171",

  footer1 = "rgba(0,0,0,0)",
  footer2 = "rgba(0,0,0,0.9)",
  overlay = "rgba(0,0,0,0.6)",
}

export type ColorsTheme = typeof Colors;
export type ColorsType = keyof typeof Colors;
