import React, { useEffect, useState } from 'react'
import './App.css'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function View() {

 
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);
  function handleDelete(index) {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  }

  return (
    <div className='e'>
      
     
      <Navbar style={{ backgroundColor: "#4b717e", boxShadow: "rgba(0,0,0,0.56) 0px 22px 70px 4px", height: "70px" }}>
        <Container>
          <Navbar.Brand className="fw-bolder fs-3 text-white">
            Travel Blog
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button className="fs-5">
              <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                Logout
              </Link>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row style={{ minHeight: "calc(100vh - 70px)" }}>

          
          <Col xs={2} style={{ backgroundColor: "#628b97" }} className="pt-3">
           

            <Button variant='none' className="fs-4">
              <Link to="/view" style={{ textDecoration: "none", color: "white" }}>
                View Blogs
              </Link>
            </Button>
            <Button variant='none' className="fs-4">
              <Link to="/viewuser" style={{ textDecoration: "none", color: "white" }}>
                View Users
              </Link>
            </Button>
          </Col>
        
          
          <Col xs={10}><br />
            <center>
              <h2>My Travel Blogs</h2>
              <br />

              {blogs.length > 0 ? (

                blogs.map((item, index) => (
                  <Row key={index} className="justify-content-center mb-4">
                    <Col xs={12} sm={10} md={6} lg={9}>
                      <Card className="shadow w-100">
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                            {item.content}<br />
                            📍 {item.location}<br />
                            📅 {item.date}<br />
                            {item.image && (
                              <img 
                                src={item.image} 
                                alt="blog" 
                                className="img-fluid mt-2"
                              />
                            )}
                          </Card.Text>

                          <Button 
                            variant="danger" 
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                ))

              ) : (
                <h5>No blogs yet added!</h5>
              )}

            </center>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default View