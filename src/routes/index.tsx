import React, { FunctionComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRoutes } from './auth.routes';



export const Routes: FunctionComponent = () => {
  return (
    <AuthRoutes/>


  );
};
