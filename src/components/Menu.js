import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "./UniversalLink"
import { Container, Navbar, Button, Nav } from "react-bootstrap"

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
            <UniversalLink
              to={path}
              id={itemId}
              key={i + menuItem.url}
              className={
                "nav-link menu-item-type-custom menu-item-object-custom menu-item-home " +
                itemId
              }
              activeClassName={"current-menu-item current_page_item nav-link"}
            >
              {menuItem.label}
            </UniversalLink>
          )
        })}
        <Button to="/" className="btn gradient-btn">
          Contact Us
        </Button>
      </Nav>
    </Navbar.Collapse>
  )
}

export default Menu
