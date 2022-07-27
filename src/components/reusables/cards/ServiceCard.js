import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ServiceCard = ({
  number,
  showDigit,
  heading,
  text,
  arrow,
  showArrow,
}) => {
  const numberShow = showDigit && showDigit === true ? true : false
  const arrowShow = showArrow && showArrow === true ? true : false
  return (
    <div className="service-card">
      <Link className="service-card-link">
        <div className="hover-bg"></div>
        {numberShow && (
          <div className="digit">
            <span>{number}</span>
          </div>
        )}
        <div className="service-card-content">
          <h3 className="heading-md">{heading}</h3>
          <p className="service-card-text">{text}</p>
        </div>
        {arrowShow && (
          <div className="arrow">
            <span className="arrow-icon"></span>
          </div>
        )}
      </Link>
    </div>
  )
}

export default ServiceCard
