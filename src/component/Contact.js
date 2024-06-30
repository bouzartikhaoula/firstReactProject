import React from 'react'
import { Container } from 'react-bootstrap'
import Layer1 from "./Layer1.png";
import Navigation from "./Navigation";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    <>
    <Navigation />
  <Container className='mt-5'>
    <div className="row">
    <div className='col-4 rounded-4' style={{
                border: "none",
                backgroundImage: `url(${Layer1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}></div>
              {/* part tow */}
    <div className='col-8 '>
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>NAME</Form.Label>
          <Form.Control type="text" placeholder="Enter your Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>EMAIL ADDRESS</Form.Label>
          <Form.Control type="email" placeholder="Your email address..." />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter subject..." />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Enquiry type</Form.Label>
          <Form.Control type="text" placeholder="Advertising" />
        </Form.Group>
      </Row>
      <Form.Label>Messages</Form.Label>
      <Form.Control style={{height:"161px"}} type="text" placeholder="Enter your messages..." />

    </Form>
    <Button variant="dark mt-4" type="submit">
        Submit
      </Button>
          </div>

    </div>
  </Container>
    </>
  )
}

export default Contact