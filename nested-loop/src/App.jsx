import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import College from "./college";

function App() {
  const collegeData = [
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.du.com",
      student: [
        {
          name: "Shafaq",
          age: "23",
          email: "shafaq@gmail.com",
        },
        {
          name: "Huma",
          age: "23",
          email: "huma@gmail.com",
        },
        {
          name: "Soriful",
          age: "23",
          email: "soriful@gmail.com",
        },
        {
          name: "Nshat",
          age: "23",
          email: "nishat@gmail.com",
        },
      ],
    },
    {
      name: "Aliah University",
      city: "Kolkata",
      website: "www.au.com",
      student: [
        {
          name: "Shafaq",
          age: "23",
          email: "shafaq@gmail.com",
        },
        {
          name: "Huma",
          age: "23",
          email: "huma@gmail.com",
        },
        {
          name: "Soriful",
          age: "23",
          email: "soriful@gmail.com",
        },
        {
          name: "Nshat",
          age: "23",
          email: "nishat@gmail.com",
        },
      ],
    },
    {
      name: "JU",
      city: "kolkata",
      website: "www.ju.com",
      student: [
        {
          name: "Shafaq",
          age: "23",
          email: "shafaq@gmail.com",
        },
        {
          name: "Huma",
          age: "23",
          email: "huma@gmail.com",
        },
        {
          name: "Soriful",
          age: "23",
          email: "soriful@gmail.com",
        },
        {
          name: "Nshat",
          age: "23",
          email: "nishat@gmail.com",
        },
      ],
    },
  ];

  return (
    <>
      {collegeData.map((college, index) => (
        <div key={index}>
          <College college={college} />
        </div>
      ))}
    </>
  );
}

export default App;
