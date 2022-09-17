import React from "react";
import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  WidthProps,
} from "styled-system";

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    WidthProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    BorderProps {
  children?: React.ReactElement | React.ReactNode;
}
