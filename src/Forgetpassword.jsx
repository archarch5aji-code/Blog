import React, { useState } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
function Forgetpassword() { 
  const[pass,setPass]=useState({user:"",newpass:""})
  const navigate=useNavigate()
  const cr=localStorage.getItem("username")
  function tap(e)
  {
    setPass({
    ...pass,
    [e.target.name]:e.target.value
  })}
  function click(e){
    e.preventDefault()
    if(!pass.user || !pass.newpass)
    {
      alert("Please fill all fields")
      return
    }
    if(pass.user !== cr)
    {
      alert("Username can't exists")
      return
    }
    localStorage.setItem("password",pass.newpass)
    alert("Password resets sucessfully!!!")
    navigate("/")
  }
  return (
    
     <div className='a'>
     <Card  style={{ width: '20rem',backgroundColor:"#1f3c51",boxShadow:" rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",color:"white"}}>
      <Card.Body>
        <Card.Title as="h2" className='fw-bold'><center>Reset Password</center></Card.Title><br/>
        <form onSubmit={click}>
        <Card.Text>
         <label className='mb-1 fw-bold'>Username  </label><br/><input type="text"name="user" onChange={tap} className="form-control mb-2"placeholder='Enter username'></input>
         <label className='mb-1 fw-bold'> New Password  </label><br/><input type="password"name="newpass" onChange={tap}className="form-control mb-3"placeholder='Enter new password'></input>
         <Button type='submit' className='form-control mb-2 fw-bold'>Reset Password</Button><br/>  
         </Card.Text></form>
        <center className='fw-bold'>Back to <Card.Link><Link to="/">Login</Link></Card.Link></center>
      </Card.Body>
    </Card> 
    </div> 
    
  )
}

export default Forgetpassword
