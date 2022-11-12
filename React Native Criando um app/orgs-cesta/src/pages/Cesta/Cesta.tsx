import React from 'react'
import { Alert, ImageBackground, SafeAreaView, View, Text, Image, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import images from '../../../assets/images'
import CestaItem from '../../components/Item'
import { FText } from '../../components/TextFont'
import styles from './styles'

interface IProps {
  Header: {
    Title: string;
  };
  Details: {
    Name: string;
    ProfilePicture: any;
    ProfileName: string;
    Description: string;
    Price: string;
    Button: string;
  };
  Itens: {
    Title: string;
    List: {
      Name: string;
      Image: any;
    }[];
  };
}

export default function Cesta({ Header, Details, Itens }: IProps) {

  const buyIt = () => {
    Alert.alert('Compra realizada!', 'Acabou de sair dinheiro da sua conta, e não foram só 40 reais...')
  }

  const _renderItem = () => (
    <>
    </>
  )

  return (
    <>
      {/* <><FText style={styles.ListTitle} boldText>{Itens.Title}</FText></> */}

      <FlatList
        data={Itens.List}
        renderItem={CestaItem}
        keyExtractor={({ Name }) => Name}
        ListHeaderComponent={() => (
          <>
            <ImageBackground
              style={styles.header}
              source={images.verduras}
            />

            <SafeAreaView style={styles.headerTitle}>
              <FText style={styles.title}>{Header.Title}</FText>
            </SafeAreaView>

            <View style={styles.product}>

              <FText style={styles.productName} boldText>{Details.Name}</FText>
              <View style={styles.productOwner}>
                <Image style={styles.productOwnerImage} source={Details.ProfilePicture} />
                <FText style={styles.productOwnerTitle}>{Details.ProfileName}</FText>
              </View>
              <FText style={styles.productDescription}>{Details.Description}</FText>
              <FText style={styles.productPrice} boldText>{Details.Price}</FText>

              <TouchableOpacity style={styles.button} onPress={buyIt}>
                <FText style={styles.buttonText} boldText>{Details.Button}</FText>
              </TouchableOpacity>


            </View>
          </>
        )}
      />
      {/* <ListItens Title='Itens da Cesta' Itens={Itens} /> */}
    </>
  )
}