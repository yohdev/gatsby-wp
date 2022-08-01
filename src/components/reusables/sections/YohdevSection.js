import React from "react"
import { Container } from "react-bootstrap"
import YohDevButton from "../../YohDevButton"
import SectionHeader from "../typography/SectionHeader"

const YohdevSection = ({
  heading,
  text,
  children,
  button,
  btnType,
  btnText,
  textContainerColor,
  sectionHeadingBool,
  sectionHeadingAltBool,
  sectionContainerStyle
}) => {
  const sectionHeading = sectionHeadingBool == true ? true : false
  const sectionHeadingAlt = sectionHeadingAltBool === true ? "d-md-flex" : ""
  const textContainerStyle = textContainerColor == "white" ? "white" : ""
  const sectionContainerStyleClass =
    sectionContainerStyle == "default"
      ? "default"
      : sectionContainerStyle == "secondary"
      ? "secondary"
      : sectionContainerStyle == "split"
      ? "split"
      : ""

  return (
    <section className={`yohdev-section-container ${sectionContainerStyleClass}`}>
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
