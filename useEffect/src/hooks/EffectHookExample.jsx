/* eslint-disable react/prop-types */
import { useEffect } from "react"

import { dbConnections } from "../dbConnections";

const EffectHookExample = ({counter:{count,setCount}}) => {
  
   
    //syntax of useEffect
    //!useEffect(setup,dependancies?)-->setup-mandatory arguement-->?optional dependencies
    // useEffect(()=>{document.title=`title is coming from useEfffect ${count}`});
    // console.log("use Effect also re-rendered") // useEffect without dependency are equal to render method
    //!example of component didmount features in functional based component
    // useEffect(()=>{console.log("check re-rendered or not in functional based component")
    // document.title=`This title is coming from functional ${count}`},[])//empty array dependencies means that is compoentDidMount in functional based component
  
  // //!example of component didupdate features in functional based component
  // useEffect(()=>{console.log("check re-rendered or not in functional based component")
  // document.title=`This title is coming from functional ${count}`},[count])

  //!example of componentwillunmount features in functional based component
useEffect(()=>{
  dbConnections.connect();
  return ()=>
  {
dbConnections.disconnect();
  }//component will unmount
},[])
    return (
    <div>
     <h1>Hook based Component</h1>
     <h2>{count}</h2>
     <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default EffectHookExample
