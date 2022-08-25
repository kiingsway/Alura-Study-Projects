import React, { useState } from 'react'
import {Part3ExpensiveComponent,Part3ExpensiveComponentMemo} from './Part3ExpensiveComponent';

let renderCont = 0;

export default function Part3() {
  const [text, setText] = useState('');

  renderCont++;

  return (
    <>
      <p> Renderizado: {renderCont}</p>
      <label htmlFor="setText">Set Text: </label>
      <input
        id='setText'
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Insira um texto...'
      />

      <Part3ExpensiveComponent/>
      <Part3ExpensiveComponentMemo/>
    </>
  )
}
