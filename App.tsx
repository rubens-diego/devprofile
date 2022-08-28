import React, { useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import {useFonts , Roboto_400Regular, Roboto_700Bold, Roboto_100Thin_Italic} from '@expo-google-fonts/roboto'
import { Home } from './src/pages/Home';
import * as SplashScreen from 'expo-splash-screen';
import { Signin } from './src/pages/Signin';
import { Signup } from './src/pages/Signup';

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
    <ThemeProvider theme={theme}>
      <Signup />
    </ThemeProvider>
  );
};

export default App;
