/* eslint-disable no-unused-vars */
import { useEffect, useState,useMemo, useCallback } from "react"


const CallbackExample = () => {
    let[count,setCount]=useState(0);
    //!usememo return value we cannot invoke it
    // let updateCount=useMemo(()=>window.localStorage.setItem("add-to-cart",count),[count]);
    //!useCallback-->it return  function we can invoke at time
    let updateCount=useCallback(()=>{
        let x="shashi"
       let setValue=window.localStorage.setItem("add-to-cart",count);
       let getValue= window.localStorage.getItem("add-to-cart");
       console.log(getValue);
       return {getValue,setValue};
    },[count]);

    let fetchUsers= useCallback(async()=>
    {
        let data=await window.fetch("https://api.github.com/users");
        let finalValue=await data.json();
        console.log(finalValue)
    } ,[])

    useEffect(()=>{
        // console.log(updateCount());
        console.log(fetchUsers());
        fetchUsers();
        updateCount();
        console.log(count);
       
    },[count,updateCount,fetchUsers])
  return (
    <div>
        <h1>CallbackExample</h1>
        <p>ADD TO CART:{count}</p>
        <button onClick={()=>setCount(count+1)}>add to cart</button>
    </div>
  )
}

export default CallbackExample