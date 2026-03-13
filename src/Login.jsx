import React, { useState } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [loginData, setLoginData] = useState({
    user: "",
    password: ""
  })

  const navigate = useNavigate()

  function handleChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  function handleLogin(e) {
    e.preventDefault()

    if (!loginData.user || !loginData.password) {
      alert("Please fill all fields")
      return
    }

    const users = JSON.parse(localStorage.getItem("users")) || []

    const validUser = users.find(
      (u) => u.user === loginData.user && u.password === loginData.password
    )

    if (validUser) {

      // Store logged in user
      localStorage.setItem("currentUser", JSON.stringify(validUser))

      alert("Login Successful")
      navigate("/landing")

    } else {
      alert("Invalid username or password")
    }
  }

  return (
    <div className='a'>

      <br /><br /><br /><br /><br /><br /><br />

      <Card style={{
        width: '20rem',
        height: "350px",
        backgroundColor: "#1f3c51",
        boxShadow: "rgba(0,0,0,0.56) 0px 22px 70px 4px",
        color: "white"
      }}>

        <Card.Body>

          <Card.Title className='fw-bold text-center fs-3'>
            User Login
          </Card.Title>

          <br />

          <form onSubmit={handleLogin}>

            <label className='fw-bold mb-1'>Username :</label>
            <input
              type="text"
              name="user"
              className="form-control mb-3"
              placeholder="Enter username"
              value={loginData.user}
              onChange={handleChange}
            />

            <label className='fw-bold mb-1'>Password :</label>
            <input
              type="password"
              name="password"
              className="form-control mb-4"
              placeholder="Enter password"
              value={loginData.password}
              onChange={handleChange}
            />

            <Button type="submit" className="form-control fw-bold mb-3">
              Sign In
            </Button>

          </form>

          <Card.Link>
            <Link className='fw-bold' to="/forget">
              Forget Password?
            </Link>
          </Card.Link>

          <Card.Link>
            <Link className='fw-bold' to="/register">
              Register Now
            </Link>
          </Card.Link>

        </Card.Body>

      </Card>

    </div>
  )
}

export default Login