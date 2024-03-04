/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useMemo, useState } from "react";
import React from "react";

let factorial=n=>{
    let i=0;
    while(i<2000) i++;
    if(n<0)
    {
        return -1;
    }
    if(n===0)
    {
        return 1;
    }
    return n*factorial(n-1);
}

const MemoExample = () => {
    let [count,setCount]=useState(1);
    const [name,setName]=useState("");
    //syntax of use memo
    // useMemo(()=>{},[])
    const result=useMemo(()=>factorial(count),[count]);
  return (
    <div>
        <h1>Memo Example</h1>
        <strong>Please Check count value {count} along with factorial value {result}</strong>
        <hr/>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <button onClick={()=> setCount(count-1)}>Decrement</button>
        <hr/>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="name"/>
        <hr/>
        <MemorizedName name={name}/>
    </div>
  )
}

export default MemoExample;
const DisplayName=({name})=>
{

return (
    <>
        {console.log("i am child component please look at me once")}
        <h1>{name}</h1>
    </>
)
}

let MemorizedName=React.memo(DisplayName)