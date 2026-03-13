import React from 'react'
import Header from './Header'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import pic from './img/abouttravel.jpg'
function About() {
  return (
    <div>
      <Header/>
      <div className='abo text-light'><br/><br/><br/>
        <center><h1 style={{ fontSize: "70px", fontWeight: "bold" }}>About Our Travel Blog</h1><br />
          <h4 style={{ fontWeight: "light" }}>Inspiring wanderlust and connecting travelers around the globe 🌍</h4>
        </center>
      </div>
      <div className='abf py-5'><br/><br/>
<Container>
 <Container>
  <Row className="align-items-center gy-4">

    <Col md={6} className="text-center">
      <Card className="w-100 shadow">
        <Card.Img
          variant="top"
          src={pic}
          style={{ height: "330px", objectFit: "cover" }}
        />
      </Card>
    </Col>

    <Col md={6}>
      <h1 className="text-danger">Who We Are</h1>
      <p className="fs-5">
       We are a team of passionate explorers, photographers, and storytellers dedicated to sharing the beauty of the world with you. Our mission is to inspire adventure, encourage responsible travel, and connect cultures through real experiences.<br/>Whether you’re planning your first trip or your hundredth, our stories, tips, and guides will help you make the most of your journey.
      </p>
    </Col>

  </Row>
</Container>
</Container>
      </div>
      <div >
        <br/>
      <center><h2 >Get In Touch</h2>
      <p className='fs-5'>Have questions, suggestions, or want to collaborate? We’d love to hear from you!</p></center><br/><br/>
      <Container>
  <Row>

    <Col md={4} sm={12} className="mb-4">
      <Card className="w-100 shadow text-center">
        <Card.Body>
          <Card.Title className='text-danger' >Email</Card.Title>
          <Card.Text>
            <a href="mailto:travelblog@gmail.com" style={{textDecoration:"none",color:"black"}}>
              travelblog@gmail.com
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col md={4} sm={12} className="mb-4">
      <Card className="w-100 shadow text-center">
        <Card.Body>
          <Card.Title className='text-danger'>Call Us</Card.Title>
          <Card.Text>
            <a href="tel:+919876543210" style={{textDecoration:"none",color:"black"}}>
              +91 98765 43210
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col md={4} sm={12} className="mb-4">
      <Card className="w-100 shadow text-center">
        <Card.Body>
          <Card.Title className='text-danger'>Follow Us</Card.Title>
          <Card.Text >
            <a href="#" className="social-link mx-2" style={{textDecoration:"none",color:"black"}}>Instagram</a> |
                  <a href="#" className="social-link mx-2" style={{textDecoration:"none",color:"black"}}>Facebook</a> |
                  <a href="#" className="social-link mx-2" style={{textDecoration:"none",color:"black"}}>Twitter</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

  </Row>
</Container>
      <br/><br/><br/></div>
    </div>
  )
}

export default About
