import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function ViewUsers() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || []
    setUsers(storedUsers)
  }, [])

  function deleteUser(index) {
    const updatedUsers = users.filter((u, i) => i !== index)
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
  }

  return (

    <div className='e1'>

      
      <Navbar style={{
        backgroundColor: "#4b717e",
        boxShadow: "rgba(0,0,0,0.56) 0px 22px 70px 4px",
        height: "70px"
      }}>
        <Container>
          <Navbar.Brand className="fw-bolder fs-3 text-white">
            Travel Blog
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Button>
              <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                Logout
              </Link>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ display: "flex" }}>

      
        <div style={{
          backgroundColor: "#628b97",
          width: "200px",
          height: "130vh"
        }}>
          <br />

          <Button variant="none" className="fs-4">
            <Link to="/view" style={{ textDecoration: "none", color: "white" }}>
              View Blogs
            </Link>
          </Button>

          <Button variant="none" className="fs-4">
            <Link to="/viewuser" style={{ textDecoration: "none", color: "white" }}>
              View Users
            </Link>
          </Button>

        </div>

        {/* Users Cards */}
        <div style={{ flex: 1 }}>
          <Container style={{ marginTop: "3%" }}>
            <Row className='justify-content-center g-4'>

              {users.length === 0 ? (
                <h4 className='text-center'>No Users Found</h4>
              ) : (

                users.map((u, index) => (

                  <Col md={12} key={index}>
                    <center>
                      <Card style={{
                        width: "18rem",
                        backgroundColor: "rgba(106,113,114,0.34)",
                        borderRadius: "15px"

                      }}
                      >

                        <Card.Body className='text-center'>

                          <h5 style={{ color: "#ffeb99" }}>
                            Name: {u.user}
                          </h5>

                          <h5 style={{ color: "#ffeb99" }}>
                            Password: {u.password}
                          </h5>

                          <Button
                            variant="danger"
                            onClick={() => deleteUser(index)}
                          >
                            Delete
                          </Button>

                        </Card.Body>

                      </Card></center>

                  </Col>

                ))

              )}

            </Row>
          </Container>
        </div>

      </div>

    </div>
  )
}

export default ViewUsers