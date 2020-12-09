import React from 'react'
import './App.css';
import ClassCounterOne from './components/classCounterOne';
import ClassMouse from './components/ClassMouse';
import HooksCounter from './components/HooksCounter';
import HooksCounterFour from './components/HooksCounterFour';
import HooksCounterone from './components/HooksCounterone';
import HooksCounterThree from './components/HooksCounterThree';
import HooksCounterTwo from './components/HooksCounterTwo';
import HooksMouse from './components/HooksMouse';
import MouseContainer from './MouseContainer';

function App() {
  return (
    <div className="App">
        {/* <HooksCounter /> */}
        {/* <HooksCounterTwo /> */}
        {/* <HooksCounterThree /> */}
        {/* <HooksCounterFour /> */}
        {/* <ClassCounterOne/> */}
        {/* <HooksCounterone /> */}
        {/* <ClassMouse /> */}
        {/* <HooksMouse /> */}
        <MouseContainer />
    </div>
  );
}

export default App;
