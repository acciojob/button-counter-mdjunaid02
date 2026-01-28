import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function App(){
  const[value, setValue]=useState(0);
  return(
   <>
    <button onClick={()=>setValue(value+1}>
    Click me
    </button>
    <p>Button clicked {value} times.</p>
    </> 
  )
}



ReactDOM.render(<App />, document.getElementById("root"));
