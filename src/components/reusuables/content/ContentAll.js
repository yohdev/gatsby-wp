import React from "react"
import { Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import YohDevButton from "../YohDevButton"

const ContentAll = (props) => {
  return (
    <div className="content-container">
      {props.alignDefault == "true" ? (
        <Row className="justify-content-md-between">
          <Col md={5}>
            {props.contentHeading == "true" ? (
              <h3 className="heading">{props.heading}</h3>
            ) : (
              ""
            )}

            <div className="text">{props.text}</div>

            {props.contentButton == "true" ? (
              <YohDevButton type="gradient-btn" title={props.btnText} />
            ) : (
              ""
            )}
          </Col>
          <Col md={5}>
            <StaticImage
              src={`../../../assets/images/cityBackground.jpg`}
              className="img-fluid"
            />
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-md-between flex-md-row-reverse">
          <Col md={5}>
            {props.contentHeading == "true" ? (
              <h3 className="heading">{props.heading}</h3>
            ) : (
              ""
            )}

            <div className="text">{props.text}</div>

            {props.contentButton == "true" ? (
              <YohDevButton type="gradient-btn" title={props.btnText} />
            ) : (
              ""
            )}
          </Col>
          <Col md={5}>
            <StaticImage
              src={`../../../assets/images/cityBackground.jpg`}
              className="img-fluid"
            />
          </Col>
        </Row>
      )}
    </div>
  )
}

export default ContentAll
