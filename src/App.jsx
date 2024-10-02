import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './maincontent'
import Countdown from './countdown'
import About from './about'
import Bg from './bg'
import Qiskit from './qiskit'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Countdown/>
      <About/>
      <Qiskit/>
    </>
  )
}

export default App
