import { useActionState } from 'react'

function App() {
 
const handleSubmit = async(previousState, formData) => {
  let name = formData.get("name");
  let password = formData.get("password");

  await new Promise((res) => setTimeout(res, 2000)); 
  console.log("handleSubmit called", name , password);

  if(name && password){
    return { success: `Form submitted successfully ` ,name, password};
  } else {
    return { error: "Please fill in both fields." ,name, password};
  }
}

  const [data,action,pending] = useActionState(handleSubmit,undefined);

  return (
    <>
      <h1>useActionState</h1>
      <form action={action}>
        <input type="text" defaultValue={data?.name} name="name" placeholder="Name" />
        <br /><br />
        <input type="password" defaultValue={data?.password}  name="password" placeholder="Password" />
        <br /><br />
        <button type="submit" disabled={pending}>Submit </button>
        <br /><br />
        {pending && <p>Submitting...</p>}

      </form>
      {
        data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
      }
      {
        data?.success && <span style={{ color: 'green' }}>{data?.success}</span>
      }

      <h4>Name: {data?.name}</h4>
      <h4>Password: {data?.password}</h4>
    </>
  )
}

export default App
