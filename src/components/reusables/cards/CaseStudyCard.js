import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
const CaseStudyCard = ({ title, type, bgImage, logo }) => {
  return (
    <div className="cs-card" style={{ backgroundImage: `url(${bgImage})` }}>
      <img src={logo} />
      <div className="hover-content">
        <span className="title">{title}</span>
        <span className="type">{type}</span>
      </div>
    </div>
  )
}

export default CaseStudyCard
