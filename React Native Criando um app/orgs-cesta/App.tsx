import React from 'react';
import { View } from 'react-native';
import Cesta from './src/pages/Cesta/Cesta';
import mock from './src/mocks/cesta'
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Montserrat_400Regular, Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontsLoaded) return (
    <AppLoading autoHideSplash />
  )

  return (
    <View style={{ flex: 1 }}>
      <Cesta {...mock} />
    </View>
  );
}