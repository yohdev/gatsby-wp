import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import YohDevButton from "../../../components/reusuables/YohDevButton"
import SectionHeader from "../typography/SectionHeader"

const YohdevSection = (props) => {
  const sectionHeading = props.sectionHeading == true ? true : false
  const sectionHeadingAlt = props.sectionHeadingAlt === true ? "d-flex" : ""
  const textContainerStyle = props.textContainerColor == "white" ? "white" : ""
  const sectionContainerStyle =
    props.sectionContainerStyle == "default"
      ? "default"
      : props.sectionContainerStyle == "secondary"
      ? "secondary"
      : ""

  return (
    <section className={`yohdev-section-container ${sectionContainerStyle}`}>
      <Container>
        {sectionHeading && (
          <div
            className={`text-container mb-5 ${
              (textContainerStyle, sectionHeadingAlt)
            }`}
          >
            <SectionHeader heading={props.heading} />
            <p className={`section-text`}>{props.text}</p>
          </div>
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
