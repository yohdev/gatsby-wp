import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <Hero
        heading="Who's Your Dev?"
        subtitle="YohDev is your one-stop shop for outstanding web solutions that help you reach your business goals."
      />
    </div>
  )
}

export default Home
