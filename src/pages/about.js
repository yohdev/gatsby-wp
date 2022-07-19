import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import { Container, Row, Col } from "react-bootstrap"
import YohdevSection from "../components/reusuables/sections/YohdevSection"
import ImageWithText from "../components/reusuables/content/ImageWithText"
import CardVerticalHover from "../components/reusuables/cards/CardVerticalHover"
import { StaticImage } from "gatsby-plugin-image"
import TeamSection from "../components/reusuables/sections/TeamSection"
import ClientLogosInline from "../components/reusuables/content/ClientLogosInline"
import TestimonialSection from "../components/reusuables/sections/TestimonialSection"

const About = () => {
  return (
    <div className="page-container">
      <Header />
      <Hero
        heading="Who's Your Dev?"
        subtitle="YohDev is your one-stop shop for outstanding web solutions that help you reach your business goals."
        btnType="gradient-btn"
        btnTitle="Contact Us"
      />
      <YohdevSection
        sectionContainerStyle="default"
        button={true}
        btnType="gradient-btn"
        btnText="Contact Us"
        btnUrl="/contact"
      >
        <ImageWithText
          rowAlign="image-right"
          text="YohDev was founded in 2017 in Winston-Salem North Carolina as a small web marketing agency. The first 3 years of the company’s life was rough and we went through a few business partners, name changes, and service offerings. But during these tough times we were able to make significant connections with key players in the small business sector and began creating a small client base which started to blossom into amazing relationships and awesome web projects."
        />

        <ImageWithText text="YohDev was founded in 2017 in Winston-Salem North Carolina as a small web marketing agency. The first 3 years of the company’s life was rough and we went through a few business partners, name changes, and service offerings. But during these tough times we were able to make significant connections with key players in the small business sector and began creating a small client base which started to blossom into amazing relationships and awesome web projects." />
      </YohdevSection>
      <YohdevSection
        sectionContainerStyle="secondary"
        sectionHeading={true}
        heading="Core Values"
        text="Even though we provide custom website development solutions to every partner, our values help us provide the best solutions and make sure that the collaboration is successful for all parties involved."
      >
        <Row className="justify-content-md-around">
          <CardVerticalHover
            heading="Passion"
            text="We believe that the best results are a product of passion and
              bring it to every project we work on."
          />
          <CardVerticalHover
            heading="Creativity"
            text="We believe that the best results are a product of passion and
              bring it to every project we work on."
          />
          <CardVerticalHover
            heading="Transparency"
            text="We believe that the best results are a product of passion and
              bring it to every project we work on."
          />
          <CardVerticalHover
            heading="Forgiveness"
            text="We believe that the best results are a product of passion and
              bring it to every project we work on."
          />
        </Row>
      </YohdevSection>
      <YohdevSection
        sectionContainerStyle="default"
        sectionHeading={true}
        sectionHeadingAlt={true}
        heading="Mission &amp; Vision"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
      >
        <StaticImage
          src={`../assets/images/Mission.png`}
          className="img-fluid"
        />
      </YohdevSection>
      <TeamSection
        heading="Our Team"
        text="20+ Years of combined professional experience. Meet our great team and achieve your business goals."
        contactHeading="Have a Question?"
        contactText="We are here for you. Contact us today!"
        btnType="gradient-btn"
        btnText="Contact Us"
        btnUrl="/contact"
      ></TeamSection>
      <YohdevSection sectionContainerStyle="split">
        <ClientLogosInline heading="Our Team has Worked with Companies Big and Small" />
      </YohdevSection>
      <YohdevSection
        sectionContainerStyle="default"
        sectionHeading={true}
        heading="Testimonial"
        text="See what our clients say.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        button={true}
        btnText="Learn More About Us"
        btnUrl="/contact"
        btnType="gradient-btn"
      >
        <TestimonialSection />
      </YohdevSection>
    </div>
  )
}

export default About
