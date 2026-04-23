import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './user'

function App() {

    const Userdata = [
        {
            name: "Huma",
            age: "23",
            email: "huma@gmail.com",
            id: 1
        },
        {
            name: "Nishat",
            age: "20",
            email: "nishat@gmail.com",
            id: 2
        },
        {
            name: "Shafaq",
            age: "22",
            email: "shafaq@gmail.com",
            id: 3
        },
        {
            name: "Soriful",
            age: "23",
            email: "soriful@gmail.com",
            id: 4
        },
        {
            name: "Rashu",
            age: "23",
            email: "rashid@gmail.com",
            id: 5
        }
    ]
    return(
        <div>
            <h1>Reuse Component in Loop</h1>
            {
              Userdata.map((user)=>(
                <div key={user.id}>
                  <User  data={user} />
                
                </div>
        
              ))
            }

        </div>
    )
}


export default App
