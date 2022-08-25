import React, { useState } from 'react'
import { Part4ExpensiveComponent, Part4ExpensiveComponentMemo } from './Part4ExpensiveComponent';

let renderCont = 0;
let renderBgCont = 0;

export default function Part4() {

  renderCont++;

  return (
    <BgProvider>
      <br />
      <span>Render Part4: {renderCont}</span>
      <Part4ExpensiveComponent />
      <Part4ExpensiveComponentMemo />
    </BgProvider>
  )
}

interface PropsBg {
  children: any
}

const BgProvider = (props: PropsBg) => {
  const [bgColor, setBgColor] = useState('');
  renderBgCont++;

  return (
    <div style={{ backgroundColor: bgColor }}>
      <span>Render BG Cont: {renderBgCont}</span>
      <br />
      <input type="text" placeholder='Insira uma cor CSS...' onChange={e => setBgColor(e.target.value)} />
      {props.children}
    </div>
  )
}