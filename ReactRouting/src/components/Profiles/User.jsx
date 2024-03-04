import { Outlet,useLocation,useParams} from "react-router-dom"
//param-path parameter
const User = () => {
let location=useLocation();
let param=useParams();
  // console.log(window.location.pathname);
  // console.log(window.location.origin);
  // console.log(window.location.protocol);
  // console.log(window.location.href);
  // console.log(window.location.hash);
  // console.log(window.location.port);
  // console.log(window.location.hostname);
  // console.log(window.location.host);

  // let testLocation=()=>
  // {
  //   // window.location.reload();
  //   window.location.assign("https://www.flipkart.com/");
  // }
  console.log(location)
  console.log(param)
  return (
    <div><Outlet/>
     <h1>Reloading the page</h1>
     {/* <button onClick={testLocation}>Reload</button>
     <button onClick={testLocation}>Redirect</button> */}
    </div>
   
  )
}

export default User