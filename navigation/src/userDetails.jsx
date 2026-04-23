import { Link, useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  return (
    <>
      <h1>User Details Page</h1>
      <h3>User ID: {id}</h3>
      <h4><Link to="/user">Go Back</Link></h4>
    </>
  );
}

export default UserDetails;