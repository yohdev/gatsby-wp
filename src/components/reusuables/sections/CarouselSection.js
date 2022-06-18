import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import FeatureWorkCard from "../cards/FeatureWorkCard"

const CarouselSection = (props) => {
  return (
    <section className="carousel-container">
      <Container>
        <Carousel
          showArrows={true}
          autoPlay={true}
          showIndicators={true}
          centerMode={true}
          centerSlidePercentage="50"
          infiniteLoop={true}
          showStatus={false}
        >
          <FeatureWorkCard title="Kulhi Air" text="Web Development / UI.UX" />
          <FeatureWorkCard
            title="ELM Street Realty"
            text="Web Development / UI.UX"
          />
        </Carousel>
      </Container>
    </section>
  )
}

export default CarouselSection
