import { useState } from "react";

// https://www.youtube.com/watch?v=O6P86uwfdR0

function App() {


  const [state, setState] = useState({count: 4, theme: 'blue'});
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    setState(prevState => {
      return {...prevState, count: prevState.count - 1}
    })
  }
  
  function incrementCount() {
    setState(prevState => {
      return {...prevState, count: prevState.count + 1}
    })
  }

  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
