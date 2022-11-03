import React from 'react';
import { View } from 'react-native';
import Cesta from './src/pages/Cesta/Cesta';

import {
  useFonts,
  Montserrat_400Regular, Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontsLoaded) return <></>

  return (
    <View>
      <Cesta />
    </View>
  );
}