function App() {

  return (
    <div>
      <h1>Exercise 1 Todos: lists</h1>
      <img src="https://st5.depositphotos.com/1703608/69112/i/450/depositphotos_691120514-stock-photo-adorable-labrador-puppy-closeup-isolated.jpg"
        alt = "dog"  class="photo" />

      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene </li>
        <li>Improve the spectrum technology</li>
      </ul>

      <button onClick={Alert}>Click me</button>

    </div>
  );
}

function Alert(){
  alert("function called")
}

export default App;
