// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Home from './components/pages/Home'
import "bootstrap/dist/css/bootstrap.css"


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Nav/>

    <Home/>
    </>
  )
}

export default App
