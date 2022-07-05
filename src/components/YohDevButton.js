import React from "react"
import { Button } from "react-bootstrap"

const YohDevButton = ({ type, title }) => {
  return <Button className={`${type}`}>{title}</Button>
}

export default YohDevButton
