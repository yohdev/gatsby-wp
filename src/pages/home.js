import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import YohdevSection from "../components/YohdevSection"

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <Hero
        heading="Who's Your Dev?"
        subtitle="YohDev is your one-stop shop for outstanding web solutions that help you reach your business goals."
      />
      <YohdevSection
        heading="Our Services"
        subtitle="We provide web development, devops, UIUX, and IT service."
      />
    </div>
  )
}

export default Home
