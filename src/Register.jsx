import React, { useState } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Register() {

  const [reg, setReg] = useState({
    user: "",
    pass1: "",
    pass2: ""
  })

  const navigate = useNavigate()

  function mode(e) {
    setReg({
      ...reg,
      [e.target.name]: e.target.value
    })
  }

  function made(e) {
    e.preventDefault()

    if (!reg.user || !reg.pass1 || !reg.pass2) {
      alert("Please fill all fields")
      return
    }

    if (reg.pass1 !== reg.pass2) {
      alert("Passwords do not match")
      return
    }

    const newUser = {
      user: reg.user,
      password: reg.pass1
    }

    const users = JSON.parse(localStorage.getItem("users")) || []

    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users))

    alert("Registered Successfully")

    navigate("/")
  }

  return (

    <div className='a'>

      <Card style={{
        width: '20rem',
        backgroundColor: "#1f3c51",
        boxShadow: "rgba(0,0,0,0.56) 0px 22px 70px 4px",
        color: "white"
      }}>

        <Card.Body>

          <Card.Title className='fw-bold text-center fs-3'>
            User Registration
          </Card.Title>

          <br />

          <form onSubmit={made}>

            <label className='fw-bold mb-1'>Username</label>
            <input
              type="text"
              name="user"
              className="form-control mb-3"
              placeholder="Enter username"
              onChange={mode}
            />

            <label className='fw-bold mb-1'>Password</label>
            <input
              type="password"
              name="pass1"
              className="form-control mb-3"
              placeholder="Enter password"
              onChange={mode}
            />

            <label className='fw-bold mb-1'>Confirm Password</label>
            <input
              type="password"
              name="pass2"
              className="form-control mb-4"
              placeholder="Re-enter password"
              onChange={mode}
            />

            <Button type="submit" className='form-control fw-bold mb-3'>
              Register Now
            </Button>

          </form>

          <div className='text-center fw-bold'>
            Already have an account? <Link to="/">Login</Link>
          </div>

        </Card.Body>

      </Card>

    </div>
  )
}

export default Register