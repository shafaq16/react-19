import { useState } from 'react'


function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  const handleAdduser=()=>{
    setUsers([...users, user])
  }
  const handleKeyDown=(e)=>{
    if(e.key === "Enter"){
      handleAdduser();
    }
  };

  const total = users.length;
  const unique = new Set(users).size;
  const last = users[users.length - 1];
  
  return (
    <>
    <h3>Total Users: {total}</h3>
    <h3>Total Unique Users: {unique}</h3>
    <h3>Last Users: {last || "No user added yet"} </h3>
     <input type="text" placeholder='Enter your Username' value={user} onChange={(e) => setUser(e.target.value)} onKeyDown={handleKeyDown}/>
     <button onClick={handleAdduser} cli>Add User</button>
     {users.map((user, index) => (<h4 key={index}>{user}</h4>))}
    </>
  )
}

export default App;
