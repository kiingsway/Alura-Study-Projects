import React from 'react'

let renderCont = 0;

const Part3ExpensiveComponent = () => {

  renderCont++

  let total = 0;
  for (let i = 0; i <= 100000000; i++) total += 1;

  return <div> <p> Renderizado non-Memo: {renderCont}</p> </div>

}

const Part3ExpensiveComponentMemo = React.memo(() => {

  renderCont++

  let total = 0;
  for (let i = 0; i <= 100000000; i++) total += 1;

  return <div> <p> Renderizado Memo: {renderCont}</p> </div>

});

export {
  Part3ExpensiveComponent,
  Part3ExpensiveComponentMemo
}