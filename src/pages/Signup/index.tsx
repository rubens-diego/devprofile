import React, { FunctionComponent } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import {
  BackToSignin,
  BackToSigninTitle,
  Container,
  Content,
  Icon,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp {
  goBack : () => void
}

export const Signup: FunctionComponent = () => {
  const {goBack} = useNavigation<ScreenNavigationProp>();
  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={logo} />
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Input placeholder="Nome"></Input>
            <Input placeholder="Email"></Input>
            <Input placeholder="Senha"></Input>
            <Button title="Entrar"></Button>
          </Content>
        </Container>
      </ScrollView>
      <BackToSignin  onPress={() => {
            goBack();
          }}>
        <Icon name="arrow-left" />
        <BackToSigninTitle>Voltar para logon</BackToSigninTitle>
      </BackToSignin>
    </KeyboardAvoidingView>
  );
};
