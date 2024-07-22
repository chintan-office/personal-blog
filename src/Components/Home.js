import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import im1 from '../Img/Dimpy-3.JPEG'
import im2 from '../Img/Dimpy-Home.jpg'
import im3 from '../Img/Dimpy_home-2.jpg'

const Home = () => {
  return (
    <>
    <Container fluid className="home-container">
      <Row className="align-items-center">
        <Col md={6} className="text-left">
          <h1>Welcome to My Website</h1>
          <p>This is a sample text on the left side of the page.</p>
        </Col>
        <Col md={6} className="text-right">
          <img src="https://via.placeholder.com/500" alt="Sample" className="img-fluid" />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Home