import React from 'react'
import './App.css';
import HooksCounter from './components/HooksCounter';
import HooksCounterThree from './components/HooksCounterThree';
import HooksCounterTwo from './components/HooksCounterTwo';

function App() {
  return (
    <div className="App">
        {/* <HooksCounter /> */}
        {/* <HooksCounterTwo /> */}
        <HooksCounterThree />
    </div>
  );
}

export default App;
