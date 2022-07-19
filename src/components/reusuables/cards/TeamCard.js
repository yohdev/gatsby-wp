import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Col } from "react-bootstrap"

const TeamCard = ({ title, firstName, lastName }) => {
  return (
    <div className="team-card">
      <div className="content">
        <div className="title-container">
          <span className="title">{title}</span>
        </div>

        <div className="image-container">
          <StaticImage
            src={`../../../assets/images/andrew.png`}
            className="img-fluid"
          />
        </div>

        <div className="name-container">
          <h3 className="name">
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
