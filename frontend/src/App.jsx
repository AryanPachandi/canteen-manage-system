import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from "./Login_page.jsx";
import LandingPage from "./LandingPage.jsx";
import StudentDashboard from "./StudentDashboard.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <LandingPage  />
        <LoginPage/>
        <StudentDashboard />
    </>
  )
}

export default App
