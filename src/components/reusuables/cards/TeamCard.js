import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const TeamCard = (props) => {
  return (
    <div className="team-card">
      <div className="content">
        <div className="title-container">
          <span className="title">{props.title}</span>
        </div>

        <div className="image-container">
          <StaticImage
            src={`../../../assets/images/andrew.png`}
            className="img-fluid"
          />
        </div>

        <div className="name-container">
          <h3 className="name">{props.name}</h3>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
