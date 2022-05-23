import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
      
    </div>
  );
}

const Counter = () => {
  const [counterval, SetCounterVal] = useState(0);
  const handleIncrement = () => {
    SetCounterVal(counterval + 5);
  };

  const handleDecrement = () => {
    SetCounterVal(counterval - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counterval}</h2>
      <CountButton handleCount={handleIncrement} btnTxt='Increment' />
      <CountButton handleCount={handleDecrement} btnTxt='Decrement' />
      
      
    </>
  );
};


const CountButton = ({handleCount, btnTxt}) => {
  return <button onClick={handleCount}>{btnTxt}</button>;
};




export default App;
