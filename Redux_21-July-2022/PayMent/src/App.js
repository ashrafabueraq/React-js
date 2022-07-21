
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Deposit, Withdrow} from './Store/action';
import {useState} from 'react'

function App() {

  const [value, setValue] = useState(0)

  
  // const Handle = (e) => {
  //   setValue(e.target.value)

  // }

  const count = useSelector((state) => state)
  const disPatch = useDispatch();


  return (
    <div className="App">

      <h1> Amount : {count}</h1>
      
      
       <input type="number" onChange={(e)=>setValue( parseInt( e.target.value))}  style={{width:"205px", height:"20px"}}/> <br /><br />
       

      <button onClick={() => disPatch(Deposit(value))} style={{backgroundColor:"green", color:"white", width:"100px", height:"50px"}}> + Deposit</button> 
      <button onClick={() => disPatch(Withdrow(value))}  style={{backgroundColor:"red", color:"white", width:"100px", height:"50px", marginLeft:"10px"}}> - Withdrow</button>


     
    
    </div>
  );
}

export default App;
