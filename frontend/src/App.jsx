import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileForm from './components/Auth/ProfileForm'
import Navbar from './components/Ui/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <ProfileForm/>
    </>
  )
}

export default App
