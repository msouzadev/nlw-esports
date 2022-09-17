import React from 'react';
import { Container } from './Box.styles';
import { BoxProps } from './Box.types';

const Box = (props: BoxProps) => {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children && children}</Container>;
};

export default Box;
