import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15
   const addValue = () => {
   console.log("clicked",counter)
    counter = counter + 1;
    setCounter(counter)
    if(counter === 20){
      document.write("sorry you can not click more")
     }
   }

   const removevalue = () => {
    console.log("clicked",counter)
     counter = counter - 1;
     setCounter(counter)
     if(counter === 0){
      document.write("sorry you can not click more")
     }
    }

  return (
    <>
   <h1>This is my first project in React.js</h1>
   <h2>Counter value: {counter}</h2>

   <button
    onClick={addValue}>
    Add value</button>
   <br />
   <br />
   <button 
   onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
