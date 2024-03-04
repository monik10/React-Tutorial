/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

// import { Fragment } from "react";

const Child = ({ subject,trainer,place:{branch,area,cost:{avg,total:{sal}}}}) => {
    // let{}=props
    
    // let {facebook, google}=props.data.course.frontend;
    // let {oracle}=props.data.course.backend;


    // let obj=new Object(isSymbol);
    // console.log(obj);
    // console.log(obj.toString());
    // console.log(typeof name);
    // console.log(typeof id);
    // console.log(typeof isAvailable);
    // console.log(typeof isNull);
    // console.log(typeof isUndefined);
    // console.log(typeof isSymbol);
    // console.log(typeof props.objprops);
    // console.log(props.data.course.frontend)
    // console.log(props);
  return (
    <div>
      {/* <h1>My name is {name}</h1>
      <h3>My Id is {id}</h3>
      <h3>It is {isAvailable==true ? "Available":"Not Available"}</h3>
      <h3> {isNull==null ? "It is null":"It is not null"}</h3>
      <h3> {isUndefined==undefined ? "It is undefined":"It is not undefined"}</h3>
      <h3>{isSymbol}</h3> */}
      { /* boolean will not print in webpage so use ternary operator */ }
      {/* <h1>{facebook}</h1>
      <h1>{google}</h1>
      <h1>{oracle}</h1> */}
      {/* {props.data.map((lang,index)=>
      {
        return <Fragment key={index+1}>
            <h1>{lang}</h1>
        </Fragment>
      })
      } */}
      {/* { props.data.map(course=>{
            return( <Fragment key={course.id}>
                  <h1>{course.course}</h1>
                  <p>{course.trainer.map(tutor=>
                  {
                    return (
                        <Fragment key={course.id}><h1>{tutor}</h1></Fragment>)
                    
                
                  })}</p>
            </Fragment>)
        })
      } */}
      {/* <h1>{props.data.count}</h1>
      <button onClick={()=> props.data.Increment()}>Increment</button> */}
      {/* {
        props.data.map(data=>
        {
return <Fragment key={data.id}>
    <img src={data.avatar_url}></img>
</Fragment>
        })
      }
       */}
       <h1>{subject}</h1>
       <p>{trainer}</p>
       <p>{branch}</p>
       <p>{area}</p>
       <p>{avg}</p>
       <p>{sal}</p>
       

    </div>
  )
}

export default Child

