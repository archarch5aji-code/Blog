import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#4b717e",
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
      }}
      className="py-3"
    >
      <Container fluid>
        <Navbar.Brand className="fw-bold fs-3 text-white">
          Travel Blog
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="text-white fs-5">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/about" className="text-white fs-5">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/profile" className="text-white fs-5">
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/add" className="text-white fs-5">
              AddBlog
            </Nav.Link>

            <Nav.Link className="text-white fs-5"as={Link} to="/">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header