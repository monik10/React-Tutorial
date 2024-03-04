import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from "./components/Root"

import "./index.css"


import Dashboard from "./components/Users/Dashboard";
import AllUsers from "./components/Users/AllUsers";
import Products from "./components/products/Products";
import Login from "./pages/sidenavbar/Login";
import Profile from './components/Users/Profile';


const router=createBrowserRouter([{
  path:"/",
  element:<Root/>,
  children:[
  {
path:"/",
element:<Dashboard/>,
children:[{
  path:"users",
  element:<AllUsers/>,
},
{
  index:"products",
  element:<Products/>,
},
{
  path:"users/:id",
  element:<Profile/>
}

],
  },
  {
    path:"/login",
    element:<Login/>
  }
  ],
},
])
const App = () => {
  return (
    <RouterProvider router={router}>
      <Root/>
    </RouterProvider>
  )
}

export default App