import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import TeamCard from "../cards/TeamCard"
import YohDevButton from "../YohDevButton"
import ClientLogosInline from "../content/ClientLogosInline"

const TeamSection = (props) => {
  const TeamData = [
    {
      id: "01",
      firstName: "Andrew",
      lastName: "Hewitt",
      title: "Founder",
      image: "../../../assets/images/andrew.png",
    },
    {
      id: "02",
      firstName: "Von",
      lastName: "Kaukeano",
      title: "Developer",
    },
    {
      id: "03",
      firstName: "Travis",
      lastName: "Davis",
      title: "Frontend Developer",
    },
    {
      id: "04",
      firstName: "Yexe",
      lastName: "Garcia",
      title: "Frontend Developer",
    },
    {
      id: "05",
      firstName: "Thurston",
      lastName: "Stone",
      title: "DevOps Consultant",
    },
    {
      id: "06",
      firstName: "Alex",
      lastName: "Ho",
      title: "UI/UX Designer",
    },
    {
      id: "07",
      firstName: "Alyson",
      lastName: "Jordan",
      title: "Quality Assurance",
    },
  ]
  return (
    <section className="team-section">
      <Container>
        <Row>
          <Col className="team-section-heading-container" md={4}>
            <div className="heading-content">
              <h3 className="heading">{props.heading}</h3>
              <p className="text">{props.text}</p>
            </div>
          </Col>
          {TeamData.map((data) => {
            return (
              <Col className="team-card-container" md={4}>
                <TeamCard
                  title={data.title}
                  firstName={data.firstName}
                  lastName={data.lastName}
                  image={data.image}
                />
              </Col>
            )
          })}
          <Col md={4}>
            <div className="contact-container text-center">
              <h3 className="contact-heading">{props.contactHeading}</h3>
              <p className="contact-text">{props.contactText}</p>
              <YohDevButton type="gradient-btn" title={props.btnText} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TeamSection
