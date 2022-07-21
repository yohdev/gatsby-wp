import React from "react"
import { Link } from "gatsby"
import YohDevButton from "../../YohDevButton"

const HeroSingle = ({ csType, csTitle }) => {
  const csHeroSingleData = {
    heroBg: "https://picsum.photos/id/101/2000",
    csTitle: "Elm Street Realty",
    csType: "Ecommere",
    csCategories: [
      { id: "0", catTitle: "Multisite" },
      { id: "1", catTitle: "Custom Design" },
    ],
  }

  return (
    <section
      className="hero case-study-single"
      style={{ backgroundImage: `url(${csHeroSingleData.heroBg})` }}
    >
      <div className="hero-single-content">
        <h3 className="cs-type">{csHeroSingleData.csType}</h3>
        <h2 className="cs-title">{csHeroSingleData.csTitle}</h2>
        <div className="cat-filter-container mt-5">
          {csHeroSingleData.csCategories.map((data) => {
            return <span className="cat-title">{data.catTitle}</span>
          })}
        </div>
      </div>
    </section>
  )
}

export default HeroSingle
