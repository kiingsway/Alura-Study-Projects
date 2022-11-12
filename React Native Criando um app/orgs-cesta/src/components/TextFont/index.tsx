import React from 'react'
import { Text, StyleSheet } from 'react-native'

interface Props {
  children: any;
  style?: any;
  boldText?: boolean;
}

export function FText({ children, style, boldText }: Props) {
  return (
    <Text style={[boldText ? styles.boldText : styles.text, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat_400Regular'
  },
  boldText: {
    fontFamily: 'Montserrat_700Bold'
  },
})