/* eslint-disable no-unused-vars */
import { useState } from "react"

// import MemoExample from "./MemoExample"
// import OneMoreMemo from "./OneMoreMemo"
import CallbackExample from "./CallbackExample"


const App = () => {
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")
  return (
    // <div>
    //   <h1>Parent Component</h1>
    //   <label>
    //   Name:
    //   <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="name"/>
    //   </label>
    //   <label>Name:
    //   <input type="text" value={address} onChange={e=>setName(e.target.value)} placeholder="address"/>
    //   </label>
    //   <hr/>
    //   {/* <MemorizedComp name={name}/> */}
    //   <MemoExample/>
    // </div>
    <>
      <h1>Parent Component</h1>
      {/* <OneMoreMemo/> */}
      <CallbackExample/>
    </>
  )
}

export default App