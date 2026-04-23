import { Link, NavLink, Outlet } from "react-router";

function College() {

  return (
    <div style={{textAlign: "center"}} className = "college">
      <h1>College Page</h1>
    <div style={{padding:"10px", margin: "15px"}}>
      <Link to={"/"}>Go Back to Home</Link>
    </div>
      <NavLink to={""} className="link">Student</NavLink>
      <NavLink to={"department"} className="link">Departments</NavLink>
      <NavLink to={"details"} className="link">College Details</NavLink>
      <Outlet/>
    </div>
  )
}

export default College;