import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Image } from "react-bootstrap"

const ImageCard = (data) => {
  return <Image src={data.imgUrl} className="img-fluid" />
}

export default ImageCard
