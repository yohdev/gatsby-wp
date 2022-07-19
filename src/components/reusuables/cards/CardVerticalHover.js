import React from "react"
import { Col } from "react-bootstrap"
import codeScreens from "../../../assets/images/codeScreens.jpg"

const cardOneStyle = {
  backgroundImage: `url(${codeScreens})`,
}

const CardVerticalHover = ({ heading, text }) => {
  return (
    <Col lg={3} md={6} sm={12} className="">
      <div className="cvh-container" style={cardOneStyle}>
        <div className="cvh-content">
          <div className="content">
            <h3 className="heading">{heading}</h3>
            <p className="text">{text}</p>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default CardVerticalHover
