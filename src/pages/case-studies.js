import React from "react"
import Hero from "../components/Hero"
import YohDevSection from "../components/reusables/sections/YohdevSection"
import CaseStudyArchive from "../components/reusables/sections/CaseStudyArchive"
import TestimonialSection from "../components/reusables/sections/TestimonialSection"

const caseStudies = () => {
  return (
    <div className="page-container">
      <Hero
        heading="Case Studies"
        subtitle="We’re focused on delivering custom web solutions that drive action and help you thrive in even the most saturated industries."
        btnType="gradient-btn"
        btnTitle="Contact Us"
      />
      <YohDevSection style="case-study">
        <CaseStudyArchive />
      </YohDevSection>
      <YohDevSection
        style="testimonials"
        showHeading={true}
        heading="Testimonial"
        text="See what our clients say.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        showBtn={true}
        btnText="Contact Us"
        btnUrl="/contact"
        btnType="gradient-btn"
      >
        <TestimonialSection />
      </YohDevSection>
    </div>
  )
}

export default caseStudies
