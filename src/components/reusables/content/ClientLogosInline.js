import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ClientLogosInline = (props) => {
  return (
    <div className="client-logo-container">
      <h3 className="cl-heading">{props.heading}</h3>
      <div className="logos-container">
        <StaticImage
          src={`../../../assets/images/uber.png`}
          className="img-fluid"
        />
        <StaticImage
          src={`../../../assets/images/statefarm.png`}
          className="img-fluid"
        />
        <StaticImage
          src={`../../../assets/images/piedmont-flight-logo.png`}
          className="img-fluid"
        />
        <StaticImage
          src={`../../../assets/images/flologic-logo.png`}
          className="img-fluid"
        />
        <StaticImage
          src={`../../../assets/images/Sony-logo.png`}
          className="img-fluid"
        />
      </div>
    </div>
  )
}

export default ClientLogosInline
