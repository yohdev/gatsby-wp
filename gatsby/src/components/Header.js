import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Menu from "./Menu"
import ToggleIcon from "../assets/svg/toggle.inline.svg"

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
        <div className="w-100 navbar-wrapper bg-primary">
            <nav className="navbar navbar-expand-sm fixed-top bg-dark navbar-dark">
                <div className="container">
                      <Link
                      to="/"
                      className="navbar-brand"
                      dangerouslySetInnerHTML={{ __html: wp.generalSettings.title }}
                    />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <Menu />
                  </div>
            </nav>	 
        </div>
    </header>
    
  )
}

export default Header
