import React from 'react';
import avatarDefault from '../../assets/avatar02.png';
import {
  Container,
  Header,
  Icon,
  UserAvatar,
  UserAvatarButton,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './styles';

export const Home = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
            <UserAvatar source={avatarDefault} />
            </UserAvatarButton>

            <UserInfoDetail>
              <UserGreeting>Óla,</UserGreeting>
              <UserName>Rubens</UserName>
            </UserInfoDetail>
          </UserInfo>
          <Icon name = "power"/>
        </UserWrapper>
      </Header>
    </Container>
  );
};
