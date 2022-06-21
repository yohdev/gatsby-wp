import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import TeamCard from "../cards/TeamCard"
import YohDevButton from "../YohDevButton"
import ClientLogosInline from "../content/ClientLogosInline"

const TeamSection = (props) => {
  const TeamData = [
    {
      id: "01",
      name: "Andrew Hewitt",
      title: "Founder",
      image: "../../../assets/images/andrew.png",
    },
    {
      id: "02",
      name: "Von Kaukeano",
      title: "Developer",
    },
    {
      id: "03",
      name: "Travis Davis",
      title: "Frontend Developer",
    },
    {
      id: "04",
      name: "Yexe Garcia",
      title: "Frontend Developer",
    },
    {
      id: "05",
      name: "Thurston Stone",
      title: "DevOps Consultant",
    },
    {
      id: "06",
      name: "Alex Ho",
      title: "UI/UX Designer",
    },
    {
      id: "07",
      name: "Alyson Jordan",
      title: "Quality Assurance",
    },
  ]
  return (
    <section className="team-section">
      <Container>
        <Row>
          <Col md={4}>
            <h3 className="heading">{props.heading}</h3>
            <p className="text">{props.text}</p>
          </Col>
          {TeamData.map((data) => {
            return (
              <Col className="team-card-container" md={4}>
                <TeamCard
                  title={data.title}
                  name={data.name}
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
