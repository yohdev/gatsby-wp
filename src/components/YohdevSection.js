import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const YohdevSection = (props) => {
  return (
    <section className="yohdev-section-container">
      <Container>
        <Row>
          <Col md={3}>
            <h3 className="heading">{props.heading}</h3>
            <p className="subtitle">{props.subtitle}</p>
          </Col>
          <Col md={9}></Col>
        </Row>
      </Container>
    </section>
  )
}

export default YohdevSection
