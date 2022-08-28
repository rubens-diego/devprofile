import React, { useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
const App = () => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
      <Routes/>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
