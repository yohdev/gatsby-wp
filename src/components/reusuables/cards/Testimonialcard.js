import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Testimonialcard = ({ text }) => {
  return (
    <div className="testimonial-card">
      <div className="logo-container">
        <StaticImage
          src={`../../../assets/images/wellsfargo.png`}
          className="img-fluid"
        />
      </div>
      <div className="text-container">
        <p className="text">{text}</p>
      </div>
    </div>
  )
}

export default Testimonialcard
