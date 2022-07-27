import React from "react"
import { Container } from "react-bootstrap"
import YohDevButton from "../../YohDevButton"
import SectionHeader from "../typography/SectionHeader"

const YohdevSection = ({
  bgImage,
  color,
  heading,
  text,
  children,
  btnText,
  style,
  showHeading,
  showBtn,
}) => {
  const headingShow = showHeading && showHeading === true ? true : false
  return (
    <section
      className={`yohdev-section-container ${style}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        {headingShow && (
          <div className={`text-container mb-5 ${color}`}>
            <SectionHeader className="test" heading={heading} />
            <p className={`section-text`}>{text}</p>
          </div>
        )}

        {children}

        {showBtn && (
          <div className="btn-container text-center mt-3">
            <YohDevButton type="gradient-btn" title={btnText} />
          </div>
        )}
      </Container>
    </section>
  )
}

export default YohdevSection
