import React, { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header' 

function Add() {

  const [add, setAdd] = useState({
    title: "",
    content: "",
    location: "",
    date: "",
    image: ""
  });

  const navigate = useNavigate();

  function go(e) {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        setAdd({
          ...add,
          image: reader.result
        });
      };
    } else {
      setAdd({
        ...add,
        [name]: value
      });
    }
  }

  function click(e) {
    e.preventDefault();
    const newBlog = {
      title: add.title,
      content: add.content,
      location: add.location,
      date: add.date,
      image: add.image
    };

    const existingBlogs =
      JSON.parse(localStorage.getItem("blogs")) || [];

    existingBlogs.push(newBlog);

    localStorage.setItem(
      "blogs",
      JSON.stringify(existingBlogs)
    );

    navigate("/landing");
  }

  return (
    <div>
      <Header/>
    <div className='d'>
      

      <Container fluid>
        <Row style={{ minHeight: "calc(100vh - 70px)" }}>

         

          <Col xs={12} className='d-flex justify-content-center align-items-center'>

            <Card
              style={{
                width: '25rem',
                transition: "0.3s"
              }}
              className="shadow"
            >

              <Card.Body>
                <Card.Title className='fs-3 text-center fw-bold'>
                  Add New Travel Blog
                </Card.Title>

                <Card.Text>
                  <form onSubmit={click}>

                    <label className='fs-5 fw-bold mb-1'>Title</label>
                    <input
                      type="text"
                      name="title"
                      onChange={go}
                      className="form-control mb-2"
                      placeholder="Enter blog title"
                      required
                    />

                    <label className='fs-5 fw-bold mb-1'>Content</label>
                    <textarea
                      name="content"
                      onChange={go}
                      className="form-control mb-2"
                      placeholder="Write your travel story..."
                    />

                    <label className='fs-5 fw-bold mb-1'>Location</label>
                    <input
                      type="text"
                      name="location"
                      onChange={go}
                      className="form-control mb-2"
                      placeholder="Enter location"
                      required
                    />

                    <label className='fs-5 fw-bold mb-1'>Date</label>
                    <input
                      type="date"
                      name="date"
                      onChange={go}
                      className="form-control mb-2"
                      required
                    />

                    <label className='fs-5 fw-bold mb-1'>Upload Image</label>
                    <input
                      type="file"
                      name="image"
                      onChange={go}
                      className='mb-3'
                    />

                    <Button type='submit' className="form-control fw-bold">
                      Add Blog
                    </Button>

                  </form>
                </Card.Text>
              </Card.Body>

            </Card>

          </Col>
        </Row>
      </Container>
    </div></div>
  );
}

export default Add;