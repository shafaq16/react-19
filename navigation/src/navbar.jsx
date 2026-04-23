import { Link, Outlet } from "react-router-dom"; 
import "./header.css"
function Navbar() {

  return (
    <div>
        <div className="header">
        <div className="Link" to = {"/"}><h2>LOGO</h2></div>
        <div>
            <ul>
                <li>
                    <Link className="Link" to = {"/"}>Home</Link>
                </li>
                <li>
                    <Link className="Link" to = {"/about"}>About</Link>
                </li>
                <li>
                    <Link className="Link" to = {"/login"}>Login</Link>
                </li>
                <li>
                    <Link className="Link" to = {"/college"}>College</Link>
                </li>
                <li>
                    <Link className="Link" to = {"/user"}>Users</Link>
                </li>
            </ul>
        </div>
    </div>
    <Outlet/>
    </div>
  )
}

export default Navbar;