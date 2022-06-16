import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const ContentCard = (props) => {
  return (
    <div className="content-card">
      <div className="num-arrow">
        <span className="num">{props.number}</span>
        <span className="arrow">
          <StaticImage src="../../../assets/images/yohArrowLong.svg" />
        </span>
      </div>
      <h3 className="content-card-heading">{props.heading}</h3>
      <p className="content-card-text">{props.text}</p>
    </div>
  )
}

export default ContentCard
