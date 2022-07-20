import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Testimonialcard = ({ text, image }) => {
  return (
    <div className="testimonial-card">
      <div className="logo-container">
        <img src={image} className="img-fluid" />
      </div>
      <div className="text-container">
        <p className="text">{text}</p>
      </div>
    </div>
  )
}

export default Testimonialcard
