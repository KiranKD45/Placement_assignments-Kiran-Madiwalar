import React, {useState} from "react";
import './App.css';

function App() {
const [count, setCount] = useState(0);


  return (
    <>
    <h1 className="head">Counter App</h1>
    <h1 className="head">The count was {count}</h1>
    <button onClick={()=>{setCount(0)}} >Reset </button>
    <button onClick={()=>{setCount(count+1)}}>Add </button>
    <button onClick={()=>{setCount(count-1)}}>Substract</button>
    </>
  
  );
}

export default App;
