/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  ReactDOM  from "react-dom";
// console.log(ReactDOM);
// const Modal = ({toggle:{toggle,handleToggle},children}) => {
//     console.log(toggle)
//   return ReactDOM.createPortal( 
//     <section id="modal-container">
//         {children}
//     </section>,document.getElementById("modal"))
// }

// export default Modal


// const Modal = ({toggle,handleToggle}) => {
//   console.log(toggle)
//   return ReactDOM.createPortal(<div className="modal">

//      <button onClick={handleToggle}>{toggle?"X":"open"}</button>


//   </div>,document.getElementById("modal"))

// }
// export default Modal;



const Modal = () => {
  return ReactDOM.createPortal(<div className="modal">Modal</div>,document.getElementById("modal"))
    
  
}

export default Modal