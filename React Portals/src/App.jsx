/* eslint-disable no-unused-vars */

// import { useState } from "react"
// import Modal from "./Modal"
// import Login from './Login';
// const App = () => {
//   let [toggle,setToggle]=useState(false)

import { useState } from "react"
import Modal from "./Modal"

//   let handleToggle=()=>
//   {
//     setToggle(!toggle);
//   }
//   return (
//     <div className="main-content">
//     <button onClick={handleToggle}>{toggle ? "close":"open"}</button>
//      {
//       toggle ?  <Modal toggle={{toggle,handleToggle} }><Login/></Modal>:""
//      }
//     </div>
//   )
// }

// export default App




const App = () => {
  let [toggle,setToggle]=useState(false);

  let handleToggle=()=>
  {
    setToggle(!toggle);
  }
  return (
    <div>
     <button onClick={handleToggle}>{toggle? "close":"open"}</button>
    {
      toggle? <Modal/>:""
    }
    </div>
  )
}

export default App