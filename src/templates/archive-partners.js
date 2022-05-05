import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "gatsby-plugin-wpgraphql-seo"
import PostPreview from "../components/PostPreview"
import ArchivePagination from "../components/ArchivePagination"

const partnersarchive = (props) => {
  const {
    data: {
      allWpPartner: { nodes, pageInfo },
      wp: { seo },
    },
    pageContext: { archiveType, archivePath, uri },
  } = props

  return (
    <Layout bodyClass="home blog wp-embed-responsive has-no-pagination showing-comments hide-avatars footer-top-visible customize-support">
      <Seo
        title="Blog"
        postSchema={JSON.parse(seo.contentTypes.post.schema.raw)}
      />

      {nodes &&
        nodes.map((post, index) => {
          return (
            <PostPreview
              key={index}
              post={post}
              isLast={index === nodes.length - 1}
            />
          )
        })}
      <ArchivePagination {...pageInfo} archivePath={archivePath} />
    </Layout>
  )
}

export const query = graphql`
  query partnerArchive($offset: Int!, $perPage: Int!, $userDatabaseId: Int) {
    allWpPartner(
      limit: $perPage
      skip: $offset
      filter: { author: { node: { databaseId: { eq: $userDatabaseId } } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        ...PostPreviewContent2
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
        pageCount
      }
    }
    wp {
      seo {
        contentTypes {
          post {
            schema {
              raw
            }
          }
        }
      }
    }
  }
`

export default partnersarchive
