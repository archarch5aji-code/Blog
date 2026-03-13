import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Add from './Add'
import View from './View'
import Forgetpassword from './Forgetpassword'
import AdLogin from './AdLogin'
import Adhome from './Adhome'
import About from './About'
import Profile from './Profile'
import Landing from './Landing'
import ViewUsers from './ViewUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/register"element={<Register/>}/>
        <Route path="/forget"element={<Forgetpassword/>}/>
        <Route path="/dashboard"element={<Home/>}/>
        <Route path="/add"element={<Add/>}/>
        <Route path="/view"element={<View/>}/>
        <Route path="/login"element={<AdLogin/>}/>
        <Route path="/landing"element={<Landing/>}/>
        <Route path="/home"element={<Adhome/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/profile"element={<Profile/>}/>
        <Route path="/viewuser" element={<ViewUsers/>}/>
      </Routes>
      </BrowserRouter>
          </>
  )
}

export default App
