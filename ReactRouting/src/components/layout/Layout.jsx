
import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    const users=[{
        id:1,
        name:"Monika",
        company:"q spiders"
    },
    {
        id:2,
        name:"Priya",
        company:"J spiders"
    },
    {
        id:3,
        name:"Karthick",
        company:"py spiders"
    },
]
  return (
    <div>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/users">
                    {
                      users.map(user=>{
                        return <Fragment key={user.id}>
                        <li>
                        <Link to={`/users/${user.name}`}key={user.id}>{user.name}</Link>
                        </li>
                        </Fragment>
                      })
                    }
                    </Link>
            </li>
           <hr/>
           {/* //must call outlet */}
           <Outlet/>
           

        </ul>
    </div>
  )
}

export default Layout