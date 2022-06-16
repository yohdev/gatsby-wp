import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { StaticImage } from "gatsby-plugin-image"

const CarouselSection = (props) => {
  return (
    <section className="carousel-container">
      <Container>
        <Carousel showArrows={true}>
          <Row>
            <Col md={4}>
              <div className="carousel-card">
                <div className="card-img">
                  <StaticImage src="../../../assets/images/kulhiImage.jpg" />
                </div>
                <div className="carousel-card-content">
                  <h3 className="title">Kulhi Air</h3>
                  <span className="type">Web Development / UI.UX</span>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel>
      </Container>
    </section>
  )
}

export default CarouselSection
