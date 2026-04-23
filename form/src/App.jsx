import { useState , useRef } from 'react'

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const userRef = useRef(null);
  const passRef = useRef(null);
  const emailRef = useRef(null);


  // Normal method : // Uncontrolled components DOM method (id based)
  const handleForm = (e) => {
    e.preventDefault();
    const user = document.getElementById('user').value;
    const pass = document.querySelector('#pass').value;
    const email = document.getElementById('email').value;
    console.log(user,pass,email);
    
  }

// useRef method
  const handleFormRef = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const pass = passRef.current.value;
    const email = emailRef.current.value; 
    console.log(user,pass,email);

  }


  //  Controlled method (state)
  const handleControlled = (e) => {
    e.preventDefault();
    console.log(user, pass, email);
    setUser('');
    setPass('');
    setEmail('');
  }


  return (
    <>
      <h1 style={{color: '#8b333d'}}>Uncontrolled Components with useRef</h1>
      <br /><br />
      <form action="" method="post" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} placeholder="Enter your name" />
        <br />
        <input type="password" ref={passRef} placeholder="Enter your password"/>
        <br />
        <input type="email" ref={emailRef} placeholder="Enter your email" />
        <br />
        <button type='submit'>Submit</button>
      </form>


      <hr />

      <h1 style={{color: '#592a72'}}>UnControlled Components </h1>
      <br /><br />
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id='user' placeholder="Enter your name" />
        <br />
        <input type="password" id='pass' placeholder="Enter your password"/>
        <br />
        <input type="email" id='email' placeholder="Enter your email" />
        <br />
        <button type='submit'>Submit</button>
      </form>

      <hr />


      <h1 style={{color: '#226b1d'}}>Controlled Components with state</h1>

      <form onSubmit={handleControlled}>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Enter your name" />
        <br />
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter your password"/>
        <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
