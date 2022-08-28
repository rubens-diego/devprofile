import React, { FunctionComponent } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import {
  Container,
  Content,
  CreateAccount,
  CreateAccountTitle,
  ForgotPasswordButton,
  ForgotPasswordButtonTitle,
  Icon,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp {
  navigate : (screen:string) => void
}

export const Signin: FunctionComponent = () => {
  const {navigate} = useNavigation<ScreenNavigationProp>();
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
              <Title>Faça seu Login</Title>
            </View>
            <Input placeholder="Email"></Input>
            <Input placeholder="Senha"></Input>
            <Button title="Entrar"></Button>

            <ForgotPasswordButton>
              <ForgotPasswordButtonTitle>
                Esqueci minha senha
              </ForgotPasswordButtonTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount>
        <Icon name="log-in" />
        <CreateAccountTitle
          onPress={() => {
            navigate('Signup');
          }}
        >
          Criar conta
        </CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};
