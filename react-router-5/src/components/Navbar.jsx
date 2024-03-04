import { Link } from "react-router-dom/cjs/react-router-dom.min"


const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link  to="/register">Register</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar