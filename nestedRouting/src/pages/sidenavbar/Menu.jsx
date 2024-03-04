import { NavLink } from "react-router-dom"


const Menu = () => {
  return (
    <div className="menu">
        <div className="logo">TESTYANTRA</div>
        <div className="menu">
            <ul>
                <li>
                    <NavLink to="/" style={({isActive})=>({background:isActive ? "purple":"",borderBottom: isActive ? "1px solid orange":""})}>Dashboard</NavLink>
                </li>
                
                <li>
                    <NavLink to="/login" style={({isActive})=>({background:isActive ? "purple":"",borderBottom: isActive ? "1px solid orange":""})}>Login</NavLink>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Menu