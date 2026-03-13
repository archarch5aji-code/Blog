import React, { useEffect, useState } from 'react'
import Header from './Header'
import './App.css'
import { Button, Card, Row, Col } from 'react-bootstrap'

function Landing() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs =
      JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  function handleDelete(index) {
    const updatedBlogs =
      blogs.filter((_, i) => i !== index);

    setBlogs(updatedBlogs);

    localStorage.setItem(
      "blogs",
      JSON.stringify(updatedBlogs)
    );
  }

  return (
    <div>
      <Header />

      <div className='lan text-white'>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <center>
          <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
            Explore the World with Us
          </h1>
          <br />
          <h4 style={{ fontWeight: "lighter" }}>
            Discover hidden places, amazing cultures, and unforgettable journeys.
          </h4>
        </center>
      </div>

      <div className='e'>
        <br />
        <center>
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
            Latest Adventures
          </h1>
          <h5>
            Check out our travel stories, guides, and tips to inspire your next journey.
          </h5>
        </center>

        <br />
        <center>
        {blogs.length > 0 ? (
          blogs.map((item, index) => (
            <Row key={index} className="justify-content-center mb-4">
              <Col className="d-flex justify-content-center">
                <Card className="shadow" style={{ width: "25rem" }}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.content}<br />
                      📍 {item.location}<br />
                      📅 {item.date}
                    </Card.Text>

                    {item.image && (
                      <img
                        src={item.image}
                        alt="blog"
                        className="img-fluid mb-3"
                      />
                    )}
                    <br/>
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
          <h5 className="text-center mt-3">
            No blogs yet added!
          </h5>
        )}
</center>
      </div>
    </div>
  )
}

export default Landing