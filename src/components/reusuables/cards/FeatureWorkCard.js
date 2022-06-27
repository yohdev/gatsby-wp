import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FeatureWorkCard = ({ title, text, image }) => {
  const showImage = getImage(image)
  return (
    <div className="feat-work-card">
      <div className="card-img">
        <img src={image} />
      </div>
      <div className="feat-work-card-content">
        <h3 className="title">{title}</h3>
        <span className="type">{text}</span>
      </div>
    </div>
  )
}

export default FeatureWorkCard
