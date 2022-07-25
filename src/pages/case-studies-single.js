import React from "react"
import Header from "../components/Header"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import HeroSingle from "../components/reusables/heros/HeroSingle"
import YohdevSection from "../components/reusables/sections/YohdevSection"
import YohDevButton from "../components/YohDevButton"
import FeatureWorkSection from "../components/reusables/sections/FeatureWorkSection"

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

  const projectHighlightData = [
    {
      id: "01",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: "02",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: "03",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
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
      <div className="screen-carousel">
        <StaticImage src="https://picsum.photos/id/1026/1500/600" />
      </div>
      <YohdevSection style="grey">
        <div className="project-highlights">
          <Container>
            <Row className="top">
              <Col md={6}>
                <div className="left-side">
                  <h3 className="heading">Project Highlights</h3>
                  {projectHighlightData.map((data) => {
                    return (
                      <div className="project-highlight">
                        <p className="ph-text">
                          <span className="icon"></span>
                          {data.text}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </Col>
              <Col md={6}>
                <div className="right-side">
                  <StaticImage src="https://picsum.photos/id/1029/500/350" />
                </div>
              </Col>
            </Row>

            <Row className="bottom">
              <Col md={6}>
                <div className="left-side">
                  <div className="image-container">
                    <StaticImage src="https://picsum.photos/id/1048/500/900" />
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="right-side">
                  <div className="text-block">
                    <h3 className="heading">A Comprehensive Feature</h3>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="text-block">
                    <h3 className="heading">A Comprehensive Feature</h3>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="btn-container">
                    <YohDevButton
                      title="Get Started"
                      btnUrl="/contact"
                      type="gradient-btn"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </YohdevSection>
      <YohdevSection
        style="carousel-alt"
        showHeading={true}
        heading="Featured Work"
        text="We ensure high quality of work to make our clients be
      satisfy."
        showBtn={true}
        btnText="Contact Us"
      >
        <FeatureWorkSection />
      </YohdevSection>
    </div>
  )
}

export default caseStudiesSingle
