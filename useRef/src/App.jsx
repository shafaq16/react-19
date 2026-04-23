import { useRef } from 'react'


function App() {
  const inputRef = useRef(null);

  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    
  }

  return (
    <>
     <h1 style={{ color: "red" }}>Hello, useRef!</h1>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={inputHandler}>Back to input field</button>
    </>
  )
}

export default App
