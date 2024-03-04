// import { useRef } from "react";
// import {useRef } from "react";
// import Input from "./Input"


// const App = () => {


// let inputRef= useRef();
// console.log(inputRef);

// let handleClick=(e)=>
// {
//   e.preventDefault();
//   let a=inputRef.current.value;
//   console.log(a);
  
// }
//   return (
//     <div>
//       <form>
//        <Input label="Name"  placeholder="Enter name" handleClick={handleClick} ref={inputRef}/>
//       </form>
//     </div>
//   )
// }

// export default App




const App = () => {

  //1)
  let Custom=()=>
  {
    //2
    let appEvent=new Event("color");
    let body=document.body;
   body.addEventListener("color",(e)=>
    {
     e.target.style.background="green"
    })
    
    
    body.dispatchEvent(appEvent)
}
  return (
    <div>
      <button id="btn2" onClick={Custom}>change Event</button>
    </div>
  )
}

export default App