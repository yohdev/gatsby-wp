// this component queries for all of the content for the entire site
// and provides it to the child component which will handle the view layer - (searching, filtering, and rendering)
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SearchResults from '../components/SearchResults'

export default function SearchPage() {

  // this endpoint is available to us because of the PHP plugin we added earlier, and the changes we made to gatsby-config.js
  // it should return all text content saved in Wordpress, across Post and Page types, and includes ACF text.
  // you could test this query by pasting it into Gatsby's GraphiQL page:
  // http://localhost:8000/___graphql
  const data = useStaticQuery(graphql`{
    allWp {
      edges {
        node {
          searchResults {
            author
            id
            pathname
            post_date
            post_title
            post_type
            searchData
          }
        }
      }
    }
  }`)


  return (
    <SearchResults data={data} />
  )
}