import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count,setCount]= useState(15);

  function addValue(){
    setCount(count+1);

  }
  function subValue(){
    setCount(count-1);
  }
  return(
    <>
     <h1>Hi This is Akshay {count}</h1>
     <button onClick={addValue}>Count Add </button>
     <button onClick={subValue}>Count Sub </button>

    
    </>
  )
}
export default App;