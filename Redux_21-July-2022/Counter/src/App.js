
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Decrement, Increment} from './Store/action';

function App() {

  const count = useSelector((state) => state)
  const disPatch = useDispatch();

  return (
    <div className="App">

      <h1> Counter : {count}</h1>

      <button onClick={() => disPatch(Increment())}>Increment</button>
      <button onClick={() => disPatch(Decrement())}>Decrement</button>


     
    
    </div>
  );
}

export default App;
