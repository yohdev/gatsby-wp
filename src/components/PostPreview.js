import React from "react"
import { Link } from "gatsby"
import PostMeta from "./PostMeta"
import PostCategories from "./PostCategories"
import FeaturedMedia from "./FeaturedMedia"
import { Button } from "react-bootstrap"

const PostPreview = ({ post, isLast }) => {
  return (
    <>
      <article
        className={`post-${post.databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized`}
        id={`post-${post.databaseId}`}
      >
        <div className="meta-container">
          <PostMeta title={post.title} author={post.author} date={post.date} />
        </div>
        <header className="entry-header">
          <div className="entry-header-inner section-inner medium">
            <h2 className="entry-title heading-size-1">
              <Link
                to={post.uri}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </h2>
          </div>
        </header>

        <div className="post-inner thin">
          <div className="entry-content">
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>
          <Link to={post.uri} class="btn btn-primary-alt">
            Read More
          </Link>
        </div>
      </article>

      {!isLast && (
        <hr
          key={post.postId + "-hr"}
          className="post-separator styled-separator is-style-wide section-inner"
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default PostPreview
