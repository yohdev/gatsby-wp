import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import heroHome from "../assets/images/heroHome.jpg"
import { StaticImage } from "gatsby-plugin-image"
import YohDevButton from "./YohDevButton"

const bgImage =
  "http://www.travisdavisdeveloper.com/wp-content/uploads/2022/06/heroHero-scaled.jpg"

const sectionStyle = {
  backgroundImage: `url(${bgImage})`,
}

const Hero = (data) => {
  return (
    <section className="hero frontpage" style={sectionStyle}>
      <Container>
        <Row className="align-items-md-center">
          <Col lg={6} className="left">
            <Image src={data.imgLeft} className="img-fluid" />
          </Col>
          <Col lg={6} className="right text-center">
            <h3 className="heading">{data.heading}</h3>
            <p className="subtitle">{data.subtitle}</p>
            <YohDevButton type="gradient-btn" title="Contact Us" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
