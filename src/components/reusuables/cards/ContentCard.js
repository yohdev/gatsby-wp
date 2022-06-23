import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const ContentCard = ({ number, heading, text, numArrow, arrow }) => {
  const numArrowShow = numArrow && numArrow === true ? true : false

  return (
    <div className="card-container">
      <div className="card-border"></div>
      <div className="content-card">
        {numArrowShow && (
          <div className="num-arrow">
            <span className="num">{number}</span>
            {arrow == "true" ? (
              <span className="arrow">
                <StaticImage src="../../../assets/images/yohArrowLong.svg" />
              </span>
            ) : (
              <span className="arrow">
                <StaticImage src="../../../assets/images/yohArrowLong.svg" />
              </span>
            )}
          </div>
        )}

        <h3 className="content-card-heading">{heading}</h3>
        <p className="content-card-text">{text}</p>
      </div>
    </div>
  )
}

export default ContentCard
