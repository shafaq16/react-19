import useToggle from "./useToggle";

function App() {
const [value,toggle] = useToggle(true);

  return (
    <>
      <button onClick={toggle}>Toggle Heading</button>
      <button onClick={() => toggle(true)}>Show</button>
      <button onClick={() => toggle(false)}>Hide</button>
      {value && <h1>Custom Hook </h1>}
    </>
  )
}

export default App
