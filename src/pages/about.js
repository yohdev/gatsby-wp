import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import { Container, Row, Col } from "react-bootstrap"
import YohdevSection from "../components/reusuables/sections/YohdevSection"
import ImageWithText from "../components/reusuables/content/ImageWithText"
import CardVerticalHover from "../components/reusuables/cards/CardVerticalHover"

const About = () => {
  return (
    <div className="page-container">
      <Header />
      <Hero
        heading="Who's Your Dev?"
        subtitle="YohDev is your one-stop shop for outstanding web solutions that help you reach your business goals."
      />
      <YohdevSection
        style="services"
        button="true"
        btnText="Contact Us"
        btnUrl="/contact"
      >
        <ImageWithText
          alignDefault="true"
          text="YohDev was founded in 2017 in Winston-Salem North Carolina as a small web marketing agency. The first 3 years of the company’s life was rough and we went through a few business partners, name changes, and service offerings. But during these tough times we were able to make significant connections with key players in the small business sector and began creating a small client base which started to blossom into amazing relationships and awesome web projects."
        />

        <ImageWithText
          alignDefault=""
          text="YohDev was founded in 2017 in Winston-Salem North Carolina as a small web marketing agency. The first 3 years of the company’s life was rough and we went through a few business partners, name changes, and service offerings. But during these tough times we were able to make significant connections with key players in the small business sector and began creating a small client base which started to blossom into amazing relationships and awesome web projects."
        />
      </YohdevSection>
      <YohdevSection
        style="core-values"
        sectionHeading="true"
        heading="Core Values"
        text="Even though we provide custom website development solutions to every partner, our values help us provide the best solutions and make sure that the collaboration is successful for all parties involved."
      >
        <Row>
          <CardVerticalHover
            heading="Passion"
            text="We believe that the best results are a product of passion and
              bring it to every project we work on."
          />
        </Row>
      </YohdevSection>
    </div>
  )
}

export default About
