import React from "react"
import { Button } from "react-bootstrap"

const YohDevButton = (props) => {
  return <Button className={`${props.type}`}>{props.title}</Button>
}

export default YohDevButton
