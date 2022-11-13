import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { estrela, estrelaCinza } from '../assets/index'

interface Props {
  count: number,
  readOnly: boolean,
  big: boolean,
}

export default function Stars({ count, readOnly = true, big = false }: Props) {

  const [starsNewCount, setStarsNewCount ] = useState(count);

  const styles = stylesFunction(big)
  const starsFullCount = [1, 2, 3, 4, 5];

  const handleSetStarsCount = (newCount: number) => {
    setStarsNewCount(newCount)
  }

  return (
    <View style={styles.stars}>
      {starsFullCount.map(i => (

        <TouchableOpacity onPress={() => handleSetStarsCount(i)} disabled={readOnly}>
          {i <= starsNewCount ?
            <Image source={estrela} style={styles.star} />
            :
            <Image source={estrelaCinza} style={styles.star} />
          }
        </TouchableOpacity>

      ))}
    </View>
  )
}

const stylesFunction = (big: boolean) => StyleSheet.create({
  stars: {
    flexDirection: 'row'
  },
  star: {
    width: big ? 36 : 12,
    height: big ? 36 : 12,
    marginRight: 2,
  }
})