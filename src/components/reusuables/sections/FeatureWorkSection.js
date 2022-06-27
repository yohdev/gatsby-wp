import React from "react"
import FeatureWorkCard from "../cards/FeatureWorkCard"
import { Row, Col } from "react-bootstrap"

const FeatureWorkSection = (data) => {
  const FeaturedWorkData = [
    {
      id: "01",
      title: "Kulhi Air",
      text: "Web Development / UI.UX",
      imageUrl:
        "http://www.travisdavisdeveloper.com/wp-content/uploads/2022/06/kulhiImage.jpg",
    },
    {
      id: "02",
      title: "ELM Street Realty",
      text: "Web Development / UI.UX",
      imageUrl:
        "http://www.travisdavisdeveloper.com/wp-content/uploads/2022/06/kulhiImage.jpg",
    },
    {
      id: "03",
      title: "Kulhi Air",
      text: "Web Development / UI.UX",
      imageUrl:
        "http://www.travisdavisdeveloper.com/wp-content/uploads/2022/06/kulhiImage.jpg",
    },
  ]

  return (
    <div className="featured-work-section mb-5">
      <Row>
        {FeaturedWorkData.map((data) => {
          console.log(data)
          return (
            <Col md={4}>
              <FeatureWorkCard
                image={data.imageUrl}
                title={data.title}
                text={data.text}
              />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default FeatureWorkSection
