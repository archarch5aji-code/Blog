import React from 'react'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Home() {
    function out(){
        localStorage.removeItem("username")
        localStorage.removeItem("password")
    }
    return (
        <>
            <div className='b'>
                <div>
                <Navbar style={{ backgroundColor: "#4b717e", boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px", height: "70px" }} >
                        <Container>
                            <Navbar.Brand className="fw-bolder fs-3 text-white">Travel Blog</Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Button className="fs-5" onClick={out}><Link to="/login"style={{textDecoration:"none",color:"white"}}>Logout</Link></Button>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div style={{ backgroundColor: "#628b97", width: "200px",height:"88vh" }} ><br />
                    
                    <Button variant='none' className="fs-3 "><Link to="/view"style={{textDecoration:"none",color:"white"}}>View Blogs</Link>
                    </Button>
                     <Button variant='none' className="fs-3 "><Link to="/viewuser"style={{textDecoration:"none",color:"white"}}>View Users</Link>
                    </Button>
                </div></div>
            
        </>
    )
}

export default Home
