import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decNum, incNum } from "../actions/action";
import "../styles/App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(counter);
  }, [counter]);
  return (
    <div id="main">
      <h1>Counter</h1>
      <div>
        <h2 data-testid="counter" >{counter}</h2>
        <button onClick={() => dispatch(incNum(1))}>+</button>
        <button onClick={() => dispatch(decNum(1))}>-</button>
      </div>
    </div>
  );
}

export default App;
