import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import YohDevSection from "../components/reusables/sections/YohdevSection"
import CaseStudyArchive from "../components/reusables/sections/CaseStudyArchive"

const caseStudyData = []

const caseStudies = () => {
  return (
    <div className="page-container">
      <Header />
      <Hero
        heading="Case Studies"
        subtitle="We're focused on delivering custom web solutions that drive action and help you thrive in even the most saturated industries."
        btnType="gradient-btn"
        btnTitle="Contact Us"
      />
      <YohDevSection style="case-study">
        <CaseStudyArchive />
      </YohDevSection>

      <Footer />
    </div>
  )
}

export default caseStudies
