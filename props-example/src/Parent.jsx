/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import { useState } from "react";
import Child from "./Components/Child"
// import JSON from "./Components/data.json"


const Parent = () => 
{
    /*sending object explicilty */
    // let obj={
    //     name:"moni",
    //     id:123,
    //     isAvailable:true,
    //     isUndefined:undefined,
    //     isNull:null,
    //     isSymbol:Symbol("monika"),}

    /*SENDING NESTED OBJECT */
    // let nesobj ={
    //  course:{frontend:{
    //         facebook:"react",
    //         google:"angular" ,},
    //         backend:{oracle:"java"}
    //  },
     
    // }
    //*SENDING ARRAY */
    // 
    /*SENDING ARRAY OF OBJECTS*/
    // let details=[{course:"java",id:1,trainer:["pavan","subham"]},{course:"webtech",id:2,trainer:["raj","rohit"]}]
//     /*SENDING FUNCTION*/
//     let[count,setCount]=useState(0)
//    let Increment=()=>{
//         return setCount(count+1);
//         }
/*nested object destructing*/
let obj={
    subject:"java",
    trainer:"shubam",
    place:{
        branch:"btm",
        area:"banglore",
        cost:{
            avg:2500,
            total:{
                sal:6700
            }
        }
    }
}
    
  return (
    <div>
    
      {/* <Child name="moni" id={123} isAvailable={true} isNull={null} isUndefined={undefined} isSymbol={Symbol("monika")}/> */}
     
     {/*sending object implictly*/}
     {/* <Child objprops={{
            name:"moni",
            id:123,
            isAvailable:true,
            isUndefined:undefined,
            isNull:null,
            isSymbol:Symbol("monika"),
            
        }}
      /> */}
      {/* <Child objprops={obj}/> */}
      {/* <Child  data={arr}/> */}
      {/* <Child data={details}/> */}
      {/* <Child data={{count,Increment}} /> */}
      {/* <Child data={JSON}/> */}
      <Child {...obj}/>
    </div>
  )
}

export default Parent
