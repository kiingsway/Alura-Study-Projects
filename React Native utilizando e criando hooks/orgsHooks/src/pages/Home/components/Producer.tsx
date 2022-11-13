import React, { useMemo, useReducer, useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Stars from '../../../components/Stars'

function distMeters(dist: number) {
  return `${dist}m`
}

export default function Producer({ name, distance, image, stars }: IProducer) {

  const [selected, invertedSelected] = useReducer(
    (selecionado) => !selecionado, false)

  const distText = useMemo(() => distMeters(distance), [distance])

  return (
    <TouchableOpacity style={styles.card} onPress={invertedSelected}>
      <Image source={image} accessibilityLabel={name} style={styles.producerImage} />
      <View style={styles.producerInfo}>
        <View>
          <Text style={styles.producerName}>{name}</Text>
          <Stars
            count={stars}
            readOnly={!selected}
            big={selected}
          />

        </View>
        <Text style={styles.producerDistance}>{distText}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    // Android Shadow
    elevation: 4,
    // iPhone Shadow
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  producerImage: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  producerInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  producerName: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  producerDistance: {
    fontSize: 12,
    lineHeight: 19,
  }
})