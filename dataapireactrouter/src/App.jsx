import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from './compoents/Home';
import GetUsers from './compoents/Getusers';
//createbrowserRouter include data api
//browser router not include data api
const App = () => {

  const router=createBrowserRouter([
   {
    path:"/",
    element:<Home/>
   },
   {
    path:"/users",
    element:<GetUsers/>,
    loader:async()=>
    {
      let data=await  window.fetch("https://api.github.com/users");
      let finalVal=await data.json();
      return finalVal;
    },
   }
  ])
  
  return(
    <RouterProvider router={router}>
       
    </RouterProvider>
  )
}

export default App