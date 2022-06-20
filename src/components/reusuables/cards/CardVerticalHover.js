import React from "react"
import { Col } from "react-bootstrap"
import codeScreens from "../../../assets/images/codeScreens.jpg"

const cardOneStyle = {
  backgroundImage: `url(${codeScreens})`,
}

const CardVerticalHover = (props) => {
  return (
    <Col>
      <div className="cvh-container" style={cardOneStyle}>
        <div className="cvh-content">
          <div className="content">
            <h3 className="heading">{props.heading}</h3>
            <p className="text">{props.text}</p>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default CardVerticalHover
