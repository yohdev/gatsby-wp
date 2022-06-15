import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const YohdevSection = (props, style) => {
  return (
    <section className="yohdev-section-container services">
      <Container>{props.children}</Container>
    </section>
  )
}

export default YohdevSection
