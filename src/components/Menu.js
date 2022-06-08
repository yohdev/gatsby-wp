import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "./UniversalLink"
import { Container, Navbar, Toggle, Nav, NavDropdown } from "react-bootstrap"

const Menu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-nav" }) {
        name
        menuItems {
          nodes {
            label
            url
            databaseId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

          const itemId = "menu-item-" + menuItem.databaseId

          return (
            <Nav.Link
              id={itemId}
              key={i + menuItem.url}
              href={path}
              className={
                "menu-item menu-item-type-custom menu-item-object-custom menu-item-home " +
                itemId
              }
            >
              {menuItem.label}
            </Nav.Link>
          )
        })}
        <button href="/" className="btn gradient-btn">
          Contact Us
        </button>
      </Nav>
    </Navbar.Collapse>
  )
}

export default Menu
