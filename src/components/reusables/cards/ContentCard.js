import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const ContentCard = ({ number, heading, text, numArrow, arrow, check }) => {
  const numArrowShow = numArrow && numArrow === true ? true : false
  const showArrow = arrow && arrow === true ? true : false
  const showCheck = check && check === true ? true : false

  return (
    <div className="card-container">
      <div className="card-border"></div>
      <div className="content-card">
        {numArrowShow && (
          <div className="num-arrow">
            <span className="num">{number}</span>
            {showArrow && (
              <span className="arrow">
                <StaticImage src="../../../assets/images/yohArrowLong.svg" />
              </span>
            )}
            {showCheck && (
              <span className="arrow">
                <StaticImage src="../../../assets/images/check.svg" />
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
