import {createBrowserRouter, RouterProvider } from "react-router-dom"

const router=createBrowserRouter[{
  path:"/",
  element:"<Layout/>"
}]

const App = () => {
  return (
   <RouterProvider router={{router}}>

   </RouterProvider>
  )
}

export default App