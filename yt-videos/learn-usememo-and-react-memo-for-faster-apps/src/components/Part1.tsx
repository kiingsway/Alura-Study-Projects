import React, { useMemo, useState } from 'react'

let renderCont = 0;
let expensiveFunctionCalled = 0;

export default function Part1() {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);

  const expensiveFunction = (number = 100000000) => {
    expensiveFunctionCalled++;
    let total = 0;
    for (let i = 1; i <= number; i++) {
      total += i;
    }
    return total;
  }

  // const sum = expensiveFunction(); // Render everytime
  const sum = useMemo(() => expensiveFunction(), []) // Render one time
  const sumUserInput = useMemo(() => expensiveFunction(number), [number]) // Render one time

  renderCont++;

  return (
    <>
      <p> Renderizado: {renderCont}</p>
      <p>Função expensiveFunction executada: {expensiveFunctionCalled}</p>
      <label htmlFor="setText">Set Text: </label>
      <input
        id='setText'
        type="text"
        onChange={e => setText(e.target.value)}
        placeholder='Insira um texto...'
      />
      <br />
      <label htmlFor="setNumber">Set Number: </label>
      <input
        id='setNumber'
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
        placeholder='Insira um número...'
      />
      <p>Text: {text}</p>
      <p>Number: {number}</p>
      <p>expensiveFunction: {sum}</p>
      <p>expensiveFunctionNumber: {sumUserInput}</p>
    </>
  )
}
