import { useState } from 'react'

function Form(){
  const [name,setName] = useState('');
  const [pass,setPass] = useState('');
  const [email,setEmail] = useState("");

  return (
    <>
      <div>
        <h1>User Login</h1>
       <form action="" method="get">
          <input type="text" value={name} onChange={(ev)=>setName(ev.target.value)} placeholder='Enter Name' /> <br /> <sup color='red'>{name}</sup>
          <br />
          <input type="pass" value={pass} onChange={(ev)=>setPass(ev.target.value)} placeholder='Enter Password' /> <br /> <sup color='red'>{pass}</sup>
          <br />
          <input type="email" value={email} onChange={(ev)=>setEmail(ev.target.value)} placeholder='Enter Email' /> <br /> <sup color='red'>{email}</sup> 
          <br />
       </form>
       <button>Submit</button> &ensp;
       <button onClick={()=>{setName("");setEmail("");setPass("")}}>Clear</button>
      </div>
    </>
  )
}
export default Form;