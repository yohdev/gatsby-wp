import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "./UniversalLink"

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


    <div
      className="collapse navbar-collapse"
      aria-label="Horizontal"
      role="navigation"
      id="navbarNav"
    >
      <ul className="navbar-nav ms-auto" id="menu-main-nav">
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

          const itemId = "menu-item-" + menuItem.databaseId

          return (
            <li
              id={itemId}
              key={i + menuItem.url}
              className={
                "menu-item menu-item-type-custom menu-item-object-custom menu-item-home " +
                itemId
              }
            >
              <UniversalLink
                to={path}
                activeClassName={"current-menu-item current_page_item nav-link"}
              >
                {menuItem.label}
              </UniversalLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Menu
