import React from "react"

import { Image } from "react-bootstrap"

const ImageCard = (data) => {
  return <Image src={data.imgUrl} className="img-fluid" />
}

export default ImageCard
