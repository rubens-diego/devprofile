import React, { FunctionComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signin } from '../pages/Signin';
import { Signup } from '../pages/Signup';

const Auth = createNativeStackNavigator();

export const AuthRoutes: FunctionComponent = () => {
  return (
    <Auth.Navigator
     screenOptions={{headerShown : false}}
     initialRouteName = "Signin">
      <Auth.Screen name="Signin" component={Signin} />
      <Auth.Screen name="Signup" component={Signup} />
    </Auth.Navigator>
  );
};
