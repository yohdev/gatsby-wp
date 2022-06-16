import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import YohDevButton from "../../YohDevButton"
import SectionHeader from "../typography/SectionHeader"

const YohdevSection = (props) => {
  return (
    <section className={`yohdev-section-container ${props.style}`}>
      <Container>
        {props.sectionHeading == "true" ? (
          <div className={`text-container text-center mb-5 ${props.color}`}>
            <SectionHeader className="test" heading={props.heading} />
            <p className={`section-text`}>
              From the moment we start working together, the journey to
              outstanding results begins and in 5 steps, you'll soon be able to
              reach your business goals faster and more efficiently.
            </p>
          </div>
        ) : (
          ""
        )}

        {props.children}

        {props.button == "true" ? (
          <div className="btn-container text-center mt-3">
            <YohDevButton type="gradient-btn" title={props.btnText} />
          </div>
        ) : (
          ""
        )}
      </Container>
    </section>
  )
}

export default YohdevSection
