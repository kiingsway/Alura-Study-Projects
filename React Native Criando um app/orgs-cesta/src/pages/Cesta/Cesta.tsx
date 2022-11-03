import React from 'react'
import { Alert, ImageBackground, SafeAreaView, View, Text, Image, Button } from 'react-native'
import images from '../../../assets/images'
import { FText } from '../../components/TextFont'
import { styles } from './styles'


export default function Cesta() {

  const buyIt = () => {
    Alert.alert('Compra realizada!', 'Acabou de sair dinheiro da sua conta, e não foram só 40 reais...')
  }


  return (
    <View>

      <ImageBackground
        style={styles.header}
        source={images.verduras}
      />

      <SafeAreaView style={styles.headerTitle}>
        <FText style={styles.title}>Detalhes da cesta</FText>
      </SafeAreaView>

      <View style={styles.product}>

        <FText style={styles.productName} boldText>Cesta de verduras</FText>
        <View style={styles.productOwner}>
          <Image style={styles.productOwnerImage} source={images.farm} />
          <FText style={styles.productOwnerTitle}>Jenny Jack Farm</FText>
        </View>
        <FText style={styles.productDescription}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.</FText>
        <FText style={styles.productPrice} boldText>R$40,00</FText>

        <Button title='Comprar' color={'#249F85'} onPress={buyIt} />

      </View>
    </View>
  )
}