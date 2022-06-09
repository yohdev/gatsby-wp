import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Menu from "./Menu"
import { Container, Navbar } from "react-bootstrap"
import logo from "../assets/images/logo.svg"

const Header = ({ pageContext, toggleBackdrop, ...props }) => {
  const { wp } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  return (
    <header id="masthead" className="">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Menu />
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
