
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <button onClick={()=> setCount(count+1)}>
      Click me
    </button>
    <p>Button clicked {count} times</p>
    </div>
  )
}

export default App
