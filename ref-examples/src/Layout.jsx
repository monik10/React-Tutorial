import { Outlet } from "react-router"


const Layout = () => {
  return (
    <>
        <nav>
            <ul>
                <li>Home</li>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout