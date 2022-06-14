import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Menu from "./Menu"
import { Container, Navbar } from "react-bootstrap"


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
            <StaticImage src="../assets/images/logo.svg" alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Menu />
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
