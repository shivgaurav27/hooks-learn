import React from 'react'
import './App.css';
import HooksCounter from './components/HooksCounter';
import HooksCounterFour from './components/HooksCounterFour';
import HooksCounterThree from './components/HooksCounterThree';
import HooksCounterTwo from './components/HooksCounterTwo';

function App() {
  return (
    <div className="App">
        {/* <HooksCounter /> */}
        {/* <HooksCounterTwo /> */}
        {/* <HooksCounterThree /> */}
        <HooksCounterFour />
    </div>
  );
}

export default App;
