import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import CaseStudyCard from "../cards/CaseStudyCard"

const CaseStudyArchive = () => {
  const filters = [
    {
      id: "0",
      title: "View All",
      url: "/",
    },
    {
      id: "1",
      title: "E-Commerce",
      url: "/",
    },
    {
      id: "2",
      title: "Multisite",
      url: "/",
    },
    {
      id: "3",
      title: "Wordpress",
      url: "/",
    },
    {
      id: "4",
      title: "Custom Design",
      url: "/",
    },
  ]

  const caseStudies = [
    {
      id: "0",
      title: "Kuhli Air",
      type: "Web Development / UI.UX",
      url: "/",
      bgImage: "https://picsum.photos/id/1/500",
    },
    {
      id: "1",
      title: "Elm Street Realty",
      type: "Web Development / UI.UX",
      url: "/",
      bgImage: "https://picsum.photos/id/2/500",
    },
    {
      id: "2",
      title: "AeroX",
      type: "Web Development / UI.UX",
      url: "/",
      bgImage: "https://picsum.photos/id/3/500",
      logo: "https://aeroxventures.com/wp-content/uploads/2022/02/cropped-47df8df2-aerox-logo-white.png",
    },
    {
      id: "0",
      title: "Kuhli Air",
      type: "Web Development / UI.UX",
      url: "/",
      bgImage: "https://picsum.photos/id/1/500",
    },
    {
      id: "1",
      title: "Elm Street Realty",
      type: "Web Development / UI.UX",
      url: "/",
      bgImage: "https://picsum.photos/id/2/500",
    },
    {
      id: "2",
      title: "AeroX",
      type: "Web Development / UI.UX",
      url: "/",
      bgImage: "https://picsum.photos/id/3/500",
      logo: "https://aeroxventures.com/wp-content/uploads/2022/02/cropped-47df8df2-aerox-logo-white.png",
    },
    {
      id: "0",
      title: "Kuhli Air",
      type: "Web Development / UI.UX",
      url: "/",
      bgImage: "https://picsum.photos/id/1/500",
    },
    {
      id: "1",
      title: "Elm Street Realty",
      type: "Web Development / UI.UX",
      url: "/",
      bgImage: "https://picsum.photos/id/2/500",
    },
    {
      id: "2",
      title: "AeroX",
      type: "Web Development / UI.UX",
      url: "/",
      bgImage: "https://picsum.photos/id/3/500",
      logo: "https://aeroxventures.com/wp-content/uploads/2022/02/cropped-47df8df2-aerox-logo-white.png",
    },
  ]

  return (
    <div className="cs-archive-container">
      <div className="filter-container mb-5">
        {filters.map((data) => {
          return (
            <Link to={data.url} className="btn filter-btn">
              {data.title}
            </Link>
          )
        })}
      </div>
      <div className="cs-card-container">
        <Container>
          <Row>
            {caseStudies.map((data) => {
              return (
                <Col md={4} className="mb-4">
                  <CaseStudyCard
                    logo={data.logo}
                    bgImage={data.bgImage}
                    title={data.title}
                    type={data.type}
                  />
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default CaseStudyArchive
