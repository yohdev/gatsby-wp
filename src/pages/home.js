import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import YohdevSection from "../components/reusables/sections/YohdevSection"
import { Container, Row, Col } from "react-bootstrap"
import ImageCard from "../components/reusables/cards/ImageCard"
import ServiceCard from "../components/reusables/cards/ServiceCard"
import ContentCard from "../components/reusables/cards/ContentCard"
import FeatureWorkSection from "../components/reusables/sections/FeatureWorkSection"
import heroHome from "../assets/images/heroHome.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  const homeHeroData = {
    heading: "Who's Your Dev?",
    subtitle:
      "YohDev is your one-stop shop for outstanding web solutions that help you reach your business goals.",
    imgLeft: "",
  }

  const frontPageData = {
    heading: "Our Services",
    subtitle: "We provide web development, devops, UIUX, and IT service.",
    imgUrl: "",
  }

  const ServiceCardData = [
    {
      id: "01",
      heading: "Web Development",
      text: "Get online with our custom websites, web apps, and internal applications.",
      arrow: "true",
    },
    {
      id: "02",
      heading: "DevOps",
      text: "Maximize your team's efficiency with ready workflows for your software development operations.",
      arrow: "true",
    },
    {
      id: "03",
      heading: "UI.UX",
      text: "Amaze your clients with beautiful interfaces that will make them stay.",
      arrow: "true",
    },
    {
      id: "04",
      heading: "IT",
      text: "Whether it's automation, data, email, dev, cloud - we have you covered.",
      arrow: "true",
    },
  ]

  const SectionHeadingData = [
    {
      sectionTitle: "Our Workflow",
      sectionSubtitle:
        "From the moment we start working together, the journey to outstanding results begins and in 5 steps, you'll soon be able to reach your business goals faster and more efficiently.",
      sectionHeading: "true",
    },
  ]

  const WorkflowCardData = [
    {
      id: "01",
      heading: "Research & Discovery",
      text: "Based on your requirements, we conduct research to discover the best ways to help you meet your business goals while also help your clients meet theirs.",
      arrow: true,
      numArrow: true,
    },
    {
      id: "02",
      heading: "UX/UI Design",
      text: "Maximize your team's efficiency with ready workflows for your software development operations.",
      numArrow: true,
      arrow: true,
    },
    {
      id: "03",
      heading: "Development",
      text: "Amaze your clients with beautiful interfaces that will make them stay.",
      numArrow: true,
      arrow: true,
    },
    {
      id: "04",
      heading: "Testing",
      text: "Whether it's automation, data, email, dev, cloud - we have you covered.",
      numArrow: true,
      arrow: true,
    },
    {
      id: "05",
      heading: "Deployment & Monitoring",
      text: "Whether it's automation, data, email, dev, cloud - we have you covered.",
      numArrow: true,
      check: true,
    },
  ]

  return (
    <div className="page-container">
      <Header />
      <Hero
        heading={homeHeroData.heading}
        subtitle={homeHeroData.subtitle}
        imgLeft={homeHeroData.imgLeft}
      />
      <YohdevSection
        style="services"
        button="true"
        btnText="Learn More About Us"
      >
        <Row className="justify-content-md-between">
          <Col lg={3} className="mb-4">
            <h3 className="heading-lrg">{frontPageData.heading}</h3>
            <p className="subtitle">{frontPageData.subtitle}</p>
            <StaticImage src={"../assets/images/servicesLeft.png"} />
          </Col>
          <Col lg={8}>
            {ServiceCardData.map((data) => {
              return (
                <ServiceCard
                  showDigit={true}
                  number={data.id}
                  showArrow={true}
                  arrow={data.arrow}
                  heading={data.heading}
                  text={data.text}
                />
              )
            })}
          </Col>
        </Row>
      </YohdevSection>

      <YohdevSection
        style="workflow"
        bgImage={heroHome}
        showHeading={true}
        showBtn={true}
        heading="Our Workflow"
        color="white"
        text="From the moment we start working together, the journey to
              outstanding results begins and in 5 steps, you'll soon be able to
              reach your business goals faster and more efficiently."
        btnText="Contact Us"
      >
        <Container>
          <Row className="justify-content-md-evenly">
            {WorkflowCardData.map((data) => {
              return (
                <Col md={4}>
                  <ContentCard
                    arrow={data.arrow}
                    check={data.check}
                    numArrow={true}
                    number={data.id}
                    heading={data.heading}
                    text={data.text}
                  />
                </Col>
              )
            })}
          </Row>
        </Container>
      </YohdevSection>
      <YohdevSection
        style="carousel"
        showHeading={true}
        heading="Featured Work"
        text="We ensure high quality of work to make our clients be
      satisfy."
        showBtn={true}
        btnText="Contact Us"
      >
        <FeatureWorkSection />
      </YohdevSection>
    </div>
  )
}

export default Home