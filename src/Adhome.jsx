import React from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from './img/beach.jpeg'
import pic1 from './img/Mountain.jpeg'
import pic2 from './img/city.jpeg'
import { Col, Container, Row } from 'react-bootstrap';
function Adhome() {
  return (
    <div>
      <Header />
      <div className='hom text-white ' ><br /><br /><br /><br /><br /><br /><br /><br />
        <center><h1 style={{ fontSize: "70px", fontWeight: "bold" }}>Discover. Travel. Live.</h1><br />
          <h4 style={{ fontWeight: "light" }}>Your next great adventure begins here 🌍</h4>
        </center>
      </div>
      <div><br />
        <center><h2 >Popular Destinations</h2>
          <p className='fs-5' >Find inspiration from top-trending locations across the world.</p></center><br /><br /><br />
        <Container>
          <Row className="gy-4">

            <Col md={4} sm={12}>
              <Card className="w-60 shadow">
                <Card.Img variant="top" src={pic} />
                <Card.Body className="text-center">
                  <Card.Title>Maldives</Card.Title>
                  <Card.Text>
                    Crystal-clear waters and endless sunsets await you.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={12}>
              <Card className="w-60 shadow">
                <Card.Img variant="top" src={pic1} />
                <Card.Body className="text-center">
                  <Card.Title>Swiss Alps</Card.Title>
                  <Card.Text>
                    Adventure through breathtaking snowy peaks.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={12}>
              <Card className="w-60 shadow">
                <Card.Img variant="top" src={pic2} />
                <Card.Body className="text-center">
                  <Card.Title>Tokyo</Card.Title>
                  <Card.Text>
                    Where tradition meets futuristic wonder.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </div><br />
      <div style={{ background: "linear-gradient(135deg, #ff5a5f, #ff9a9e)", height: "30vh" }}><br /><br />
        <h3 className='d-flex justify-content-center align-items-center text-white'>“Jobs fill your pockets, but adventures fill your soul.”</h3>
        <h5 className='d-flex justify-content-center align-items-center  text-white'> --Jamie Lyn Beatty</h5>

      </div>
    </div>
  )
}

export default Adhome
