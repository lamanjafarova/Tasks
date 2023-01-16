import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setcount] = useState("")
  return (
    <div>
      <p>{count}</p>
        <button onClick={(e)=>{
          return setcount(count+ e.target.innerText)
        }}>1</button>
       <button onClick={(e)=>{
          return setcount(count + e.target.innerText)
        }}>2</button>
         <button onClick={(e)=>{
          return setcount(count + e.target.innerText)
        }}>3</button>
         <button onClick={(e)=>{
          return setcount(count + e.target.innerText)
        }}>+</button>
         <button onClick={(e)=>{
        let sum = 0
          return count.split("+").forEach(element =>{
            sum += + element;
            setcount(sum);
        })
        }}>=</button>
    </div>
  )
}

export default Count