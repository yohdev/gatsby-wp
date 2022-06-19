import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import { Container, Row, Col } from "react-bootstrap"
import YohdevSection from "../components/reusuables/sections/YohdevSection"
import ContentAll from "../components/reusuables/content/ContentAll"

const About = () => {
  return (
    <div className="page-container">
      <Header />
      <Hero
        heading="Who's Your Dev?"
        subtitle="YohDev is your one-stop shop for outstanding web solutions that help you reach your business goals."
      />
      <YohdevSection style="services" button="true" btnText="Contact Us">
        <ContentAll
          alignDefault="true"
          text="YohDev was founded in 2017 in Winston-Salem North Carolina as a small web marketing agency. The first 3 years of the company’s life was rough and we went through a few business partners, name changes, and service offerings. But during these tough times we were able to make significant connections with key players in the small business sector and began creating a small client base which started to blossom into amazing relationships and awesome web projects."
        />

        <ContentAll
          alignDefault=""
          text="YohDev was founded in 2017 in Winston-Salem North Carolina as a small web marketing agency. The first 3 years of the company’s life was rough and we went through a few business partners, name changes, and service offerings. But during these tough times we were able to make significant connections with key players in the small business sector and began creating a small client base which started to blossom into amazing relationships and awesome web projects."
        />
      </YohdevSection>
    </div>
  )
}

export default About
