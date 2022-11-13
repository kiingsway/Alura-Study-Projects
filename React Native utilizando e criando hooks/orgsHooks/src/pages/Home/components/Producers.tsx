import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import useProducers from '../../../hooks/useProducers';
import Producer from './Producer';

interface Props {
  header: JSX.Element;
}

export default function Producers({ header }: Props) {

  const [title, producers] = useProducers();


  const HeaderText = () => (
    <>
    {header}
    <Text style={styles.title}>{title as string}</Text>
    </>
  )

  const ProducerItem = (item: IProducer) => (
    <Text>{item.name}</Text>
  )


  return (
    <FlatList
      data={producers as IProducer[]}
      renderItem={({ item }) => <Producer {...item} />}
      keyExtractor={({ name }) => name}
      ListHeaderComponent={<HeaderText />}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#4D4D4D',
  }
})