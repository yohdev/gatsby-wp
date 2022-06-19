import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import heroHome from "../assets/images/heroHome.jpg"
import { StaticImage } from "gatsby-plugin-image"
import YohDevButton from "../components/reusuables/YohDevButton"

const sectionStyle = {
  backgroundImage: `url(${heroHome})`,
}

const Hero = (props) => {
  return (
    <section className="hero frontpage" style={sectionStyle}>
      <Container>
        <Row className="align-items-md-center">
          <Col lg={6} className="left">
            <StaticImage
              src={`../assets/images/yohdevHeroLeft.png`}
              className="img-fluid"
            />
          </Col>
          <Col lg={6} className="right text-center">
            <h3 className="heading">{props.heading}</h3>
            <p className="subtitle">{props.subtitle}</p>
            <YohDevButton type="gradient-btn" title="Contact Us" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
