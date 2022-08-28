import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { Container, Content, Title } from './styles';

export const Signin: FunctionComponent = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle = {{flex : 1}} >
      <Container>
        <Content>
          <Title>Faça seu Login</Title>
          <Input placeholder="Email"></Input>
          <Input placeholder="Senha"></Input>
          <Button title='Entrar' ></Button>
        </Content>
      </Container>
    </ScrollView>
  );
};