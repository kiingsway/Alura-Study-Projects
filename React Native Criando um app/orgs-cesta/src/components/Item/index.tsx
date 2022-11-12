import React from 'react';
import { View, Image } from 'react-native';
import { FText } from '../TextFont';
import styles from './styles';

interface Props {
  item: {
    Name: string,
    Image: any;
  };
}

const CestaItem = ({ item }: Props) => (
  <View key={item.Name} style={styles.Item}>
    <Image source={item.Image} style={styles.ItemImage} />
    <FText style={styles.ItemText}>{item.Name}</FText>
  </View>
)

export default CestaItem;