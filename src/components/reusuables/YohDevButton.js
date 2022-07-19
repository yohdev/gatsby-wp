import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"

const YohDevButton = ({ type, url, title }) => {
  return (
    <Button className={`${type}`} to={url}>
      {title}
    </Button>
  )
}

export default YohDevButton
