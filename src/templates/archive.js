import React from "react"
import { graphql } from "gatsby"
// import PostEntry from "../../components/post-entry"
import Layout from "../components/Layout"
import Seo from "gatsby-plugin-wpgraphql-seo"
// import NextIcon from "../../components/icons/next"
// import PreviousIcon from "../../components/icons/previous"
import PostPreview from "../components/PostPreview"
import ArchivePagination from "../components/ArchivePagination"
import {
  Button,
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
} from "react-bootstrap"

const Archive = (props) => {
  const {
    data: {
      allWpPost: { nodes, pageInfo },
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

      <div className="blog-hero">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="hero-title">YohDevTheme Blog</h1>
              <span className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </span>
              <InputGroup className="mt-3">
                <FormControl
                  placeholder="Search Blog"
                  aria-label="Search Blog"
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="secondary"
                  id="button-addon2"
                  class="btn btn-secondary"
                >
                  Search
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="blog-content">
        <Container>
          <Row>
            <Col md={8}>
              <div className="left-side">
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
              </div>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </section>

      <ArchivePagination {...pageInfo} archivePath={archivePath} />
    </Layout>
  )
}

export const query = graphql`
  query ArchivePage(
    $offset: Int!
    $perPage: Int!
    $userDatabaseId: Int
    $categoryDatabaseId: Int
  ) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: {
        author: { node: { databaseId: { eq: $userDatabaseId } } }
        categories: {
          nodes: { elemMatch: { databaseId: { eq: $categoryDatabaseId } } }
        }
      }
      sort: { fields: date, order: DESC }
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
