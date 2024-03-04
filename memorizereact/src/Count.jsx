/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// import React from "react"

// const Count = ({count:{count,Increment}}) => {
    
//   return (
//     <div>
//     {console.log("I am child Component")}
//         <h1>I am child Component {count}</h1>
//         <button onClick={Increment}>Increment from child</button>
//     </div>
//   )
// }

// export const MemorizedComp= React.memo(Count)


import React from "react";
const Count = ({name}) => {
  return (
    <div>
    {console.log("Check child component is re-render or not")}
      <h1>{name}</h1>
    </div>
  )
}

export  const MemorizedComp=React.memo(Count) ;