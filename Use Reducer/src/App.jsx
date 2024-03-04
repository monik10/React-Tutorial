import { useReducer } from "react"

const App = () => {
  let initialState={
   count:0,
  }

  let reducer=(state,action)=>
  {
console.log(state);
console.log(action);
// console.log(action.type);
// switch(action.type)
// {
//   case "INCREMENT":
//     return{
//       count:state.count+1,
//     }
//     case "DECREMENT":
//     return{
//       count:state.count-1,
//     }
//     case "RESET":
//     return{
//       count:0,
//     }
//     default:
//       return state;


// }
if(action.type === "INCREMENT")
{
  return{
         count:state.count+1,
        }
}
else if(action.type === "DECREMENT")
{
  return{
          count:state.count-1,
        }
}
else if(action.type === "RESET")
{
  return{
          count:0,
        }
}
  }
  

  let[state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
    <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>

    </div>
  )
}

export default App