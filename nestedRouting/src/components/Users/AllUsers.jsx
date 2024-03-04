/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react"
import USER from "/src/data.json"
import { Link, useLocation } from "react-router-dom";

const AllUsers = () => {
  let location=useLocation();
  console.log(location.state)
  let [state,setState]=useState(USER);
  return (
    <main>
    
      <div className="userBlock">
      {/* <h1>{location.state.name}</h1> */}
    </div>
   
    <div className="users">
    
    {
      state.map.length>0 && state.map(user =>(
        <Fragment key={user.id}>
        <div className="container">
          <figure>
            <picture>
              <img src={user.avatar_url} alt={user.login} height={150} width={150}/>
            </picture>
            <Link to={`/users/${user.id}`} state={user}>View More</Link>
          </figure>
        </div>

        </Fragment>
      ))
    }
    </div>
    </main>
  )
}

export default AllUsers