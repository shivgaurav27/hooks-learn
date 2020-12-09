import React, { useState } from "react";

function HooksCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(0);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      count : {count}
      <br />
      <button onClick  ={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={incrementFive}>Increment 5 </button>
      <button onClick={() =>setCount(count - 1)}>Decrement</button>
    </div>
  
  );
}

export default HooksCounterTwo;
