import React from "react"
import Header from "../components/Header"
import HeroSingle from "../components/reusables/heros/HeroSingle"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

const caseStudiesSingle = () => {
  return (
    <div className="page-container">
      <Header />
      <HeroSingle />
      <div className="about-project-container py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="about-project-heading">About This Project</h2>
              <Link className="project-link">Visit Website</Link>
            </Col>
            <Col md={6}>
              <p className="about-project-text">
                Elm Street Realty is a boutique real estate management firm that
                specializes in properties that offer their tenants the privacy
                and sense of individuality that you can't find in cookie cutter
                developments.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default caseStudiesSingle
