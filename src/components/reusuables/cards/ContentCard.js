import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const ContentCard = (props) => {
  return (
    <div className="card-container">
      <div className="card-border"></div>
      <div className="content-card">
        {props.numArrow == "true" ? (
          <div className="num-arrow">
            <span className="num">{props.number}</span>
            {props.arrow == "true" ? (
              <span className="arrow">
                <StaticImage src="../../../assets/images/yohArrowLong.svg" />
              </span>
            ) : (
              <span className="arrow">
                <StaticImage src="../../../assets/images/yohArrowLong.svg" />
              </span>
            )}
          </div>
        ) : (
          ""
        )}

        <h3 className="content-card-heading">{props.heading}</h3>
        <p className="content-card-text">{props.text}</p>
      </div>
    </div>
  )
}

export default ContentCard
