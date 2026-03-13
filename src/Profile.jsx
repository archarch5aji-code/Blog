import React from 'react'
import Header from './Header'
import Card from 'react-bootstrap/Card'
import { Col, Container, Row } from 'react-bootstrap'

function Profile() {

  // Get current logged in user
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  return (
    <div>
      <Header />

      <div className='pro text-white'>
        <br /><br />

        <center>
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
            Our Amazing Team 💫
          </h1>
          <br />
          <h5>
            We’re not just a team — we’re a family working together to create something wonderful.
          </h5>
        </center>

        <Container className="mt-5">
          <Row className="justify-content-center g-4">

            <Col md={12} sm={12} className="d-flex justify-content-center">

              <Card
                style={{
                  width: "100%",
                  maxWidth: "18rem",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px"
                }}
              >

                <Card.Body className="text-center">

                  <Card.Title className='text-dark fw-bold fs-4'>
                    Current User
                  </Card.Title>

                  <Card.Title className='text-warning'>
                    <b>Name : </b>{currentUser?.user}
                  </Card.Title>

                  <Card.Title className='text-warning'>
                    <b>Password : </b>{currentUser?.password}
                  </Card.Title>

                  <Card.Text className='text-white'>
                    A creative and dedicated team member who brings passion and positivity to every project.
                  </Card.Text>

                </Card.Body>

              </Card>

            </Col>

          </Row>
        </Container>

        <br />

        <center>
          <Card
            style={{
              width: "100%",
              maxWidth: "30rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
          >

            <Card.Body>

              <Card.Text className='text-white fw-bold'>
                📞 Contact Us: travelblog@gmail.com | 📍 Chennai, India
              </Card.Text>

            </Card.Body>

          </Card>
        </center>

      </div>
    </div>
  )
}

export default Profile