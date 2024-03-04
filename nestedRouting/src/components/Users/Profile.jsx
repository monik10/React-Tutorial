/* eslint-disable react/no-unescaped-entities */
import { useLocation } from "react-router"
import {  NavLink } from "react-router-dom";


const Profile = () => {
  let profileData=useLocation();
  let {avatar_url,login,html_url}=profileData.state;
  return (
    <section id="profile">
      <article>
        <header>
        <NavLink to="/users" className="back_btn">Back</NavLink>
          <picture>
            <img src={avatar_url} alt={login}/>
          </picture>
        </header>
        <main>
          <h2>{login}</h2>
         
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
"Sed ut perspiciatieritUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
<a href={html_url} target="_blank" rel="noreferrer">View GITHUB profile </a>
        </main>
      </article>
    </section>
  )
}

export default Profile