import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import YohDevButton from "../../../components/reusuables/YohDevButton"
import SectionHeader from "../typography/SectionHeader"

const YohdevSection = ({
  heading,
  text,
  children,
  button,
  btnType,
  btnText,
  textContainerColor,
}) => {
  const sectionHeading = sectionHeading == true ? true : false
  const sectionHeadingAlt = sectionHeadingAlt === true ? "d-md-flex" : ""
  const textContainerStyle = textContainerColor == "white" ? "white" : ""
  const sectionContainerStyle =
    sectionContainerStyle == "default"
      ? "default"
      : sectionContainerStyle == "secondary"
      ? "secondary"
      : sectionContainerStyle == "split"
      ? "split"
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
            <SectionHeader heading={heading} />
            <p className={`section-text`}>{text}</p>
          </div>
        )}

        {children}

        {button && (
          <div className="btn-container text-center mt-3">
            <YohDevButton type={btnType} title={btnText} />
          </div>
        )}
      </Container>
    </section>
  )
}

export default YohdevSection
