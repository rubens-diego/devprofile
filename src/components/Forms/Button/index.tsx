import React, { FunctionComponent } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  title,
  ...oderProps
}) => {
  return (
    <Container {...oderProps}>
      <Title>{title}</Title>
    </Container>
  );
};
