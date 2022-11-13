import React from 'react'
import { useState, useEffect } from 'react'
import { GetProducers } from '../services/ManageData';

export default function useProducers() {

  const [title, setTitle] = useState('');
  const [producers, setProducers] = useState<IProducer[]>([]);

  useEffect(() => {
    const response = GetProducers();
    setTitle(response.title)
    setProducers(response.list)
  }, [])

  return [title, producers]

}