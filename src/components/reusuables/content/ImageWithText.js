import React from "react"
import { Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import YohDevButton from "../YohDevButton"

const ContentAll = (props) => {
  const rowAlign = props.rowAlign === "image-right" ? "flex-md-row-reverse" : ""
  return (
    <div className="content-container">
      <Row className={`justify-content-around ${rowAlign}`}>
        <Col md={5} className="mb-sm-3">
          <StaticImage
            src={`../../../assets/images/cityBackground.jpg`}
            className="img-fluid"
          />
        </Col>
        <Col md={5}>
          {props.contentHeading == "true" ? (
            <h3 className="heading">{props.heading}</h3>
          ) : (
            ""
          )}

          <div className="text">{props.text}</div>

          {props.contentButton == "true" ? (
            <YohDevButton
              type="gradient-btn"
              title={props.btnText}
              url={props.url}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  )
}

export default ContentAll
