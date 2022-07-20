import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import TestimonialCard from "../cards/TestimonialCard"

const TestimonialSection = () => {
  const testimonials = [
    {
      id: "0",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://raw.githubusercontent.com/yohdev/gatsby-wp/feature/about/src/assets/images/wellsfargo.png",
    },
    {
      id: "1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://raw.githubusercontent.com/yohdev/gatsby-wp/feature/about/src/assets/images/wellsfargo.png",
    },
    {
      id: "2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://raw.githubusercontent.com/yohdev/gatsby-wp/feature/about/src/assets/images/wellsfargo.png",
    },
  ]
  return (
    <div className="testimonial-carousel-container">
      <Carousel
        showArrows={true}
        autoPlay={true}
        showIndicators={true}
        centerMode={true}
        centerSlidePercentage="30"
        infiniteLoop={true}
        showStatus={false}
      >
        {testimonials.map((data) => {
          return <TestimonialCard image={data.image} text={data.text} />
        })}
      </Carousel>
    </div>
  )
}

export default TestimonialSection
