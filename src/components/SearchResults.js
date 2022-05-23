
   
import React, { useEffect, useState } from "react";
import lunr from "lunr";

const SearchResults = props => {
  const {
    data: {
      allWp: { edges: nodes }
    },
    onSelect
  } = props;


  const posts = nodes[0].node.searchResults;

  // // Default props
  const minCharacters = props.minCharacters || 2;
  const contentCharacters = props.contentCharacters || 200;
  const maxResults = props.maxResults || 10;
  const placeholder = props.placeholder || "Search...";

  const [query, setQuery] = useState("");
  const [idx, setIdx] = useState(null);

  let results;
  if (idx && query) {
    results = idx.search(`*${query}*`).slice(0, maxResults);
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (typeof window !== "undefined") {
    window.history.replaceState({}, document.title);
    };
    };
  useEffect(() => {
    const idx = getIndex();
    setIdx(idx);

    if (typeof window !== "undefined" && window.history.state) {
      const passedState = window.history.state.query;
      if(passedState){
        setQuery(passedState)
      }
    }
  },[query]);

  const getIndex = () => {
    return lunr(function() {
      this.ref("id");
      this.field("title");
      this.field("content");
      this.field("path");

      posts.map(post => {
        return this.add({
          id: post.id,
          title: post.post_title,
          content: post.searchData,
          path: post.pathname
        });
      });
    });
  };

  return (
    <div className={`container`}>
    <input
        name='query'
        onChange={handleChange}
        autoComplete='off'
        placeholder={placeholder}
        className={`input`}
      />
      {query && query.length >= minCharacters && (
        <ul className={`suggests`}>
         Search results for: {query}
          {results &&
            results.map(o => {
              const post = posts.filter(post => post.id === o.ref)[0];

              return (
                <li key={post.id} className={`suggest`}>
                  <h4
                    className={`suggestTitle`}
                    onClick={() => onSelect(post)}
                    children={post.post_title}
                  />

                  {post.searchData && (
                    <div
                      className={`suggestContent`}
                      dangerouslySetInnerHTML={{
                        __html: post.searchData.substring(
                          0,
                          contentCharacters
                        )
                      }}
                    />
                  )}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;