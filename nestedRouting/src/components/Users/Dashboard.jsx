import { Outlet } from "react-router"
import {  NavLink } from "react-router-dom"




const Dashboard = () => {
  return (
    <div>
        <h1>DASHBOARD</h1>
        <main className="dashboard-content">
        <ul>
            <li>
            <NavLink to="/" className= {({isActive}) => (isActive === true ? "active":" ")}
            
          
            >PRODUCTS</NavLink>
            <NavLink to="/users"  className= {({isActive}) => (isActive === true ? "active":" ")}>USERS</NavLink>  
            </li>
        </ul>
        </main>
        
        <Outlet/>
        
    </div>
  )
}

export default Dashboard