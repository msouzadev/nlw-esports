import React from 'react';
import { SpaceProps, ColorProps, TypographyProps, LayoutProps, FlexboxProps, BorderProps, PositionProps } from 'styled-system';

export interface BoxProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps, FlexboxProps, PositionProps, BorderProps {
  children?: React.ReactElement | React.ReactNode;
}
