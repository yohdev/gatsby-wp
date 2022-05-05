import React from "react"
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
} from "react-bootstrap"
const GetAnAdvantage = () => {
  return (
    <div className="advantage-container mb-5">
      <h3 className="heading">Get an advantage</h3>
      <p className="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="email-form"
            type="email"
            placeholder="Email*"
          />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I’d like to receive news and information from StackPath and understand I can unsubscribe at anytime."
            isInValid="false"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default GetAnAdvantage
