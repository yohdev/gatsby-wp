import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "gatsby-plugin-wpgraphql-seo"
import Comments from "../../components/Comments"
import ContentTypePagination from "../../components/ContentTypePagination"
import AuthorBio from "../../components/AuthorBio"
import PostMeta from "../../components/PostMeta"
import PostCategories from "../../components/PostCategories"
import FeaturedMedia from "../../components/FeaturedMedia"
import { Container, Row, Col } from "react-bootstrap"
import GetAnAdvantage from "../../components/GetAnAdvantage"
import PostsRelatedTopics from "../../components/PostsRelatedTopics"
const post = ({ data }) => {
  const { nextPage, previousPage, page } = data
  const {
    title,
    uri,
    content,
    featuredImage,
    categories,
    excerpt,
    databaseId,
    author,
    date,
  } = page

  return (
    <Layout
      bodyClass={`post-template-default single single-post postid-${databaseId} single-format-standard wp-embed-responsive singular has-post-thumbnail has-single-pagination showing-comments footer-top-visible customize-support`}
    >
      <Seo post={page} />

      <article
        className={`post-${databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized`}
        id={`post-${databaseId}`}
      >
        <div className="single-post-hero">
          <Container>
            <div className="hero-content">
              <div className="breadcrumb">
                <a href="#">Blog</a>&nbsp; / &nbsp;<a href="#">Announcements</a>
              </div>
              <h1
                className="hero-title entry-title"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <PostMeta title={title} author={author} date={date} />
            </div>
          </Container>
        </div>

        <div className="post-inner thin py-5">
          <Container>
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Container>
        </div>

        <div className="section-inner">
          <Container>
            <AuthorBio author={author} />
            <ContentTypePagination
              previousPage={previousPage}
              nextPage={nextPage}
              contentType={"Post"}
            />
            <Comments />
          </Container>
        </div>
      </article>
      <div className="post-bottom-content">
        <Container>
          <Row>
            <Col md={6}>
              <GetAnAdvantage />
            </Col>
            <Col md={6}>
              <PostsRelatedTopics />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      ...PostContent
    }
    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`

export default post
