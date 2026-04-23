import { useState } from 'react'
import './App.css'
import Form from './form'
import Skills from './Skills'
import Radio from './radio'
import StudentData from './student'


function App() {
  return(
    <>
      <Form />
      <br />
      <Skills />
      <br />
      <Radio />
      <br />
      <StudentData />
    </>

  )
}

export default App
