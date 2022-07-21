import React from "react"
import Header from "../components/Header"
import HeroSingle from "../components/reusables/heros/HeroSingle"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

const caseStudiesSingle = () => {
  const projectListData = [
    {
      id: "01",
      heading: "Client & Business Goals",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "02",
      heading: "Product Description",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "03",
      heading: "Applied Technologies",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]
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
      <div className="about-project-list">
        <Container>
          {projectListData.map((data) => {
            return (
              <Row>
                <Col sm={1}>
                  <span className="digit">{data.id}</span>
                </Col>
                <Col sm={10}>
                  <h3 className="heading">{data.heading}</h3>
                  <p className="text">{data.text}</p>
                </Col>
              </Row>
            )
          })}
        </Container>
      </div>
    </div>
  )
}

export default caseStudiesSingle
