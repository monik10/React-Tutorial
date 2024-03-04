/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { React, forwardRef } from 'react';
/* eslint-disable react/prop-types */


const Input = (props,ref) => {
 
    
    let {label,placeholder,handleClick}=props;
  return ( 
    <div>
    {label}
        <input type="text" ref={ref}/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default forwardRef(Input);