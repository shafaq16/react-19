import { useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState({
    name: "John",
    address: {
      city: "Munger",
      country: "India"
    }
  })


  const handleName = (value) => {
    data.name = value;
    setData({
      ...data
    })
  }

  const handleCity = (value) => {
    data.address.city = value;
    setData({
      ...data,
      address: {
        ...data.address,value
      }
    })
  }

  const handleCountry = (value) => {
    data.address.country = value;
    setData({
      ...data
    })
  }


  return (
    <>
     <h1>Updating Objects in React</h1>
     <input type="text"  onChange={(e) => handleName(e.target.value) } placeholder="Enter name" />
     <input type="text"  onChange={(e) => handleCity(e.target.value) } placeholder="Enter city" />
     <input type="text"  onChange={(e) => handleCountry(e.target.value) } placeholder="Enter country" />
     <h2>{data.name}</h2>
     <h2>{data.address.city}</h2>
     <h2>{data.address.country}</h2>
    </>
  )
}

export default App
