import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/images/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faListCheck } from "@fortawesome/free-solid-svg-icons"
import { fa } from "@fortawesome/free-solid-svg-icons"

const Prefooter = () => {
  return (
    <section className="prefooter">
      <Container>
        <div className="heading-container mb-3">
          <span>GET STARTED TODAY AND REACH</span>
          <span>YOUR BUSINESS GOALS</span>
        </div>
        <p className="subtitle text-center mb-4">
          YohDev is here for you. Contact us today and let's build your business
          goals.
        </p>
        <Row className="prefooter-block-container justify-content-md-center">
          <Col md={4} className="prefooter-block-container">
            <div className="prefooter-block left">
              <div className="block-border"></div>
              <div className="block-content">
                <div className="icon">
                  <FontAwesomeIcon icon={faListCheck} />
                </div>
                <h3 className="heading">Needs Assessment</h3>
                <p className="text">
                  Let us know what you need, and we'll find the best solution to
                  satisfy your business goals.
                </p>
                <Button to="/" className="btn gradient-btn">
                  Fill The Assessment Out
                </Button>
              </div>
            </div>
          </Col>
          <Col md={4} className="prefooter-block-container">
            <div className="prefooter-block right">
              <div className="block-border"></div>
              <div className="block-content">
                <div className="icon">
                  <FontAwesomeIcon icon={faListCheck} />
                </div>
                <h3 className="heading">Needs Assessment</h3>
                <p className="text">
                  Let us know what you need, and we'll find the best solution to
                  satisfy your business goals.
                </p>
                <Button to="/" className="btn gradient-btn">
                  Fill The Assessment Out
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Prefooter
