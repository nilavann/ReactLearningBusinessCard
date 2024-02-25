import { useState } from 'react'
import './App.css'
import BusineesCard from './Components/BusinessCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BusineesCard/>    
    </>
  )
}

export default App
