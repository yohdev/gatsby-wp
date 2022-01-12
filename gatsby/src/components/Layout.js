import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"

import FooterMenusWidgets from "./FooterMenusWidgets"
import MenuModal from "./MenuModal"

import { useStaticQuery, graphql } from 'gatsby';
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo';

const backdropClasses = " backdrop"

const Layout = ({ children, bodyClass }) => {
  const [backdropActive, setBackdropActive] = useState(false);

  const {
    wp: { seo },
} = useStaticQuery(graphql`
    query SiteInfoQuery {
        wp {
            seo {
                contentTypes {
                    post {
                        title
                        schemaType
                        metaRobotsNoindex
                        metaDesc
                    }
                    page {
                        metaDesc
                        metaRobotsNoindex
                        schemaType
                        title
                    }
                }
                webmaster {
                    googleVerify
                    yandexVerify
                    msVerify
                    baiduVerify
                }
                schema {
                    companyName
                    personName
                    companyOrPerson
                    wordpressSiteName
                    siteUrl
                    siteName
                    inLanguage
                    logo {
                        sourceUrl
                        mediaItemUrl
                        altText
                    }
                }
                social {
                    facebook {
                        url
                        defaultImage {
                            sourceUrl
                            mediaItemUrl
                        }
                    }
                    instagram {
                        url
                    }
                    linkedIn {
                        url
                    }
                    mySpace {
                        url
                    }
                    pinterest {
                        url
                        metaTag
                    }
                    twitter {
                        username
                    }
                    wikipedia {
                        url
                    }
                    youTube {
                        url
                    }
                }
            }
        }
    }
`);


  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    setBackdropActive(active)
  }

  return (
    <div
      id={"GatsbyBody"}
      className={
        bodyClass +
        " showing-menu-modal showing-modal" +
        (backdropActive ? backdropClasses : "")
      }
    >
      <Header toggleBackdrop={toggleBackdrop} />

      <MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />
      <SEOContext.Provider value={{ global: seo }}>
      <main id="site-content" role="main" className="yohdev">
        {children}
      </main>
      </SEOContext.Provider>
      <FooterMenusWidgets />

      <Footer />
    </div>
  )
}

export default Layout
