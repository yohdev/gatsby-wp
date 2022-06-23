import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const FeatureWorkCard = ({ title, text }) => {
  return (
    <div className="carousel-card">
      <div className="card-img">
        <StaticImage src="../../../assets/images/kulhiImage.jpg" />
      </div>
      <div className="carousel-card-content">
        <h3 className="title">{title}</h3>
        <span className="type">{text}</span>
      </div>
    </div>
  )
}

export default FeatureWorkCard
