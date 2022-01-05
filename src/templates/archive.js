import React from "react"
import { graphql } from "gatsby"
// import PostEntry from "../../components/post-entry"
import Layout from "../components/Layout"
import Seo from 'gatsby-plugin-wpgraphql-seo';
// import NextIcon from "../../components/icons/next"
// import PreviousIcon from "../../components/icons/previous"
import PostPreview from "../components/PostPreview"
import ArchivePagination from "../components/ArchivePagination"

const Archive = (props) => {
  const {
    data: {
      allWpPost: { nodes, pageInfo },
      wp: { seo }
    },
    pageContext: { archiveType, archivePath, uri },
  } = props

  return (
    <Layout
      bodyClass="home blog wp-embed-responsive has-no-pagination showing-comments hide-avatars footer-top-visible customize-support">
      <Seo title="Blog" postSchema={JSON.parse(seo.contentTypes.post.schema.raw)}/>

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
query ArchivePage($offset: Int!, $perPage: Int!, $userDatabaseId: Int, $categoryDatabaseId: Int) {
  allWpPost(
    limit: $perPage
    skip: $offset
    filter: {author: {node: {databaseId: {eq: $userDatabaseId}}}, categories: {nodes: {elemMatch: {databaseId: {eq: $categoryDatabaseId}}}}}
    sort: {fields: date, order: DESC}
  ) {
    nodes {
      ...PostPreviewContent
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

export default Archive
