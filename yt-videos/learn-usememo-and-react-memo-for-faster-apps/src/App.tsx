import { useMemo, useState } from 'react';
import './App.css';
import Part1 from './components/Part1';
import Part2 from './components/Part2';
import Part3 from './components/Part3';
import Part4 from './components/Part4';


function App() {

  return (
    <div className="App" style={{ fontSize: '20px' }}>
      
      <div className="parts part1">
        <Part1 />
      </div>

      <div className="parts part2">
        <Part2 />
      </div>

      <div className="parts part3">
        <Part3 />
      </div>

      <div className="parts part4">
        <Part4 />
      </div>

    </div>
  );
}

export default App;
