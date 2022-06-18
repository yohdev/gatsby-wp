import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const FeatureWorkCard = (props) => {
  return (
    <div className="carousel-card">
      <div className="card-img">
        <StaticImage src="../../../assets/images/kulhiImage.jpg" />
      </div>
      <div className="carousel-card-content">
        <h3 className="title">{props.title}</h3>
        <span className="type">{props.text}</span>
      </div>
    </div>
  )
}

export default FeatureWorkCard
