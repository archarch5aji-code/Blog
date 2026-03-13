import React, { useState } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function AdLogin() {
  const [log,setLog]=useState({username:"",password:""})
  const navigate=useNavigate()
  const us="Arch"
  const ps="Arch123"
  function go(e){
    setLog({
      ...log,
      [e.target.name]:e.target.value
    })
  }
  function click(e){
    e.preventDefault()
    if(!log.username  || !log.password )
    {
      alert("Please fill all details")
      return
    }
    if(log.username === us &&  log.password=== ps)
    {
      alert("Login sucessfull!!")
       navigate("/dashboard")
      return
    }
    else{
      alert("Invalid credentials")
    }
   
   

  }
  return (
    <div className='f'>
         <div>
                <Navbar style={{ backgroundColor: "#4b717e", boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px", height: "70px" }} >
                        <Container>
                            <Navbar.Brand className="fw-bolder fs-3 text-white">Travel Blog</Navbar.Brand>
                            <Navbar.Toggle />
                           
                        </Container>
                    </Navbar>
                </div><br/><br/><br/>
        <div className='card1' >
     <Card style={{ width: '20rem',backgroundColor:"#1f3c51",boxShadow:" rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",color:"white"}}>
      <Card.Body>
        <form onSubmit={click}>
        <Card.Title as="h2" className='fw-bold'><center>Admin Login</center></Card.Title><br/>
        <Card.Text>
         <label className='mb-1 fw-bold'>Username  </label><br/><input type="text" name="username" onChange={go} className="form-control mb-2"placeholder='Enter username'></input>
         <label className='mb-1 fw-bold'>Password  </label><br/><input type="password" name="password" onChange={go}className="form-control mb-4"placeholder='Enter new password'></input>
         <Button type="submit" className='form-control mb-4 fw-bold '>Login</Button><br/>    
         </Card.Text></form> 
      </Card.Body>
    </Card> </div>
    </div> 
  )
}
export default AdLogin
