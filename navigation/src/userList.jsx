import { Link } from "react-router";

function UserList() {
    const userData = [
        {id:1, name: 'Huma'},
        {id:2, name: "Shafaq"},
        {id:3, name: "Sora"},
        {id:4, name: "Nishat"},
        {id:5, name: "sana"},
        {id:6, name: "tony"},
        {id:7, name: "liza"}
    ]
  return (
    <div style={{marginLeft: "15px"}}>
        <h1>User List Page</h1>
      {
        userData.map((item)=>(
           <h4> <Link to={"/user/" + item.id}>{item.name}</Link></h4>
        ))
      }
    </div>
  )
}

export default UserList;