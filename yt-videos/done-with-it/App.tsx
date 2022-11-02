import React, { useState } from 'react';
import {
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Switch,
  Image,
  ActivityIndicator,
  Vibration,
  Alert
} from 'react-native';

export default function App() {

  const [sw, setSw] = useState(false);
  const [txt, setTxt] = useState('Oie mundo!');
  const [loading, setLoading] = useState(false);
  const [seed, setSeed] = useState(1);
  function reload() {
    setSeed(Math.random());
    Alert.prompt('Decida', 'Teste', txt => setTxt(txt))
  }

  const PATTERN_DESC =
    Platform.OS === "android"
      ? "wait 1s, vibrate 2s, wait 3s"
      : "wait 1s, vibrate, wait 2s, vibrate, wait 3s";

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: "#DDD",
      backgroundColor: sw ? 'white' : '#333',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        {styles.container.backgroundColor}
      </Text>

      <TouchableOpacity
        onLongPress={() => setTxt('a')}>
        <>
          <Button
            color={'orange'}
            title="Vibrate once"
            onPress={() => Vibration.vibrate()} />
          <Text>{txt}</Text>
          {loading ? <ActivityIndicator size="large" /> : null}
          <Image
            key={seed}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            source={{
              width: 200,
              height: 200,
              uri: 'https://picsum.photos/200'
            }} />
        </>

      </TouchableOpacity>
      <View>
        <Button
          title="Vibrar por 2 segundos"
          onPress={() => Vibration.vibrate(2000)}
        />
      </View>
      {Platform.OS !== "android" ? <></>
        : null}
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={sw ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        value={sw}
        onChange={() => setSw(p => !p)} />
      <Button

        title='Recarregar imagem'
        onPress={() => reload()} />
      <Image source={require('./assets/favicon.png')} />

      <Button
        title="Stop vibration pattern"
        onPress={() => Vibration.cancel()}
        color="#FF0000"
      />
    </SafeAreaView>
  );
}