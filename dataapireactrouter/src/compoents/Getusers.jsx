import { Fragment } from "react";
import { useLoaderData, useNavigation } from "react-router-dom"


const GetUsers = () => {
    let data=useLoaderData();
    let state=useNavigation();
    console.log(state)
  return (
    <div>
        {
          state.state === "loading"?<h1>Loading...</h1>:data?.map(user=>{
                return <Fragment key={user.id}>
                    <li>
                        <img src={user.avatar_url} alt={user.login} height={100} width={100}/>
                    </li>
                </Fragment>
            })
        }
    </div>
  )
}

export default GetUsers