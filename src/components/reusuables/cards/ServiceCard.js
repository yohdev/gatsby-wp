import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <Link className="service-card-link">
        <div className="hover-bg"></div>
        {props.number ? (
          <div className="digit">
            <span>{props.number}</span>
          </div>
        ) : (
          ""
        )}
        <div className="service-card-content">
          <h3 className="heading-md">{props.heading}</h3>
          <p className="service-card-text">{props.text}</p>
        </div>
        {props.arrow == "true" ? (
          <div className="arrow">
            <span className="arrow-icon"></span>
          </div>
        ) : (
          ""
        )}
      </Link>
    </div>
  )
}

export default ServiceCard
