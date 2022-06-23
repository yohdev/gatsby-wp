import React from "react"

const SectionHeader = ({ heading, color }) => {
  return <h3 className={`section-header ${color}`}>{heading}</h3>
}

export default SectionHeader
