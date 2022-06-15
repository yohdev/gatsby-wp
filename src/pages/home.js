import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import YohdevSection from "../components/reusuables/sections/YohdevSection"
import { Row, Col } from "react-bootstrap"
import ImageCard from "../components/reusuables/cards/ImageCard"
import ServiceCard from "../components/reusuables/cards/ServiceCard"
import YohDevButton from "../components/YohDevButton"

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <Hero
        heading="Who's Your Dev?"
        subtitle="YohDev is your one-stop shop for outstanding web solutions that help you reach your business goals."
      />
      <YohdevSection style={{ backgroundColor: "#F0F0F0" }}>
        <Row className="justify-content-md-between">
          <Col lg={3}>
            <h3 className="heading-lrg">Our Services</h3>
            <p className="subtitle">
              We provide web development, devops, UIUX, and IT service.
            </p>
            <ImageCard />
          </Col>
          <Col lg={8}>
            <ServiceCard
              number="01"
              arrow="true"
              heading="Web Development"
              text="Get online with our custom websites, web apps, and internal
          applications."
            />
            <ServiceCard
              number="02"
              arrow="true"
              heading="DevOps"
              text="Maximize your team’s efficiency with ready workflows for your software development operations."
            />
            <ServiceCard
              number="03"
              arrow="true"
              heading="UI.UX"
              text="Amaze your clients with beautiful interfaces that will make them stay."
            />
            <ServiceCard
              number="04"
              arrow="true"
              heading="IT"
              text="Whether it’s automation, data, email, dev, cloud – we have you covered."
            />
          </Col>
        </Row>
        <div className="btn-container text-center mt-3">
          <YohDevButton type="gradient-btn" title="Learn More About Us" />
        </div>
      </YohdevSection>
    </div>
  )
}

export default Home
