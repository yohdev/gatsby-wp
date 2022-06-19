import React from "react"

const SectionHeader = (props) => {
  return <h3 className={`section-header ${props.color}`}>{props.heading}</h3>
}

export default SectionHeader
