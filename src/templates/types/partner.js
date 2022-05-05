import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "gatsby-plugin-wpgraphql-seo"
import ContentTypePagination from "../../components/ContentTypePagination"

const partner = ({ data }) => {
  const { nextPage, previousPage, partner } = data
  const { uri, title, content, databaseId } = partner

  return (
    <Layout
      bodyClass={`post-template-default single single-post postid-${databaseId} single-format-standard wp-embed-responsive singular has-post-thumbnail has-single-pagination showing-comments footer-top-visible customize-support`}
    >
      <Seo post={partner} />
      <article
        className={`post-${databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized`}
        id={`post-${databaseId}`}
      >
        <header className="entry-header has-text-align-center header-footer-group">
          <div className="entry-header-inner section-inner medium">
            <h1
              className="entry-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
        </header>
        <ContentTypePagination
          previousPage={previousPage}
          nextPage={nextPage}
          contentType={"Partner"}
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query partner($id: String!, $nextPage: String, $previousPage: String) {
    partner: wpPartner(id: { eq: $id }) {
      uri
      title
      content
      databaseId
      author {
        node {
          avatar {
            url
          }
        }
      }
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
    }
    nextPage: wpPartner(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPartner(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`

export default partner
