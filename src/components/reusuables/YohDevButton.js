import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"

const YohDevButton = (props) => {
  return (
    <Button className={`${props.type}`} to={props.url}>
      {props.title}
    </Button>
  )
}

export default YohDevButton
