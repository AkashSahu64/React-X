import React, {useState} from "react";


function App() {

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
      return
    }
  }

  const deleteValue = () =>{
    if(counter > 0)
      setCounter(counter - 1)
  }
  return (
    <div>
      <button onClick={addValue}>Add</button>
      <p>{counter}</p>
      <button onClick={deleteValue}>Delete</button>
    </div>
  );
}

export default App;
