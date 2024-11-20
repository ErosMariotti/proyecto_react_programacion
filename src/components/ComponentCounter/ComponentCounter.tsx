import { useState } from "react"

export const ComponentCounter = () => {
  const  [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter((prev)=>counter + 1)
  }
  const decrementarCounter = () => {
    if(counter <= 0) return;  // no decrementar si counter es 0 o menor
    setCounter((prev)=>counter - 1)
  }
    return (
        <div>
            <h2>valor de counter: {counter}</h2>

            <button onClick={incrementCounter} >Incrementar</button>
            <button onClick={decrementarCounter} >Decrementar</button>
        </div> 
    )
}
