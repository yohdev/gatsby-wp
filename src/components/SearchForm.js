
   
import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import {
  Button
} from "react-bootstrap";

const SearchForm = ({ onUpdate }) => {

  // const {
  //   data: {
  //     allWp: { edges: nodes }
  //   },
  //   onSelect
  // } = props;




  // Default props
  const placeholder = "Search...";

  const [query, setQuery] = useState("");

//   useEffect(()=>{
//     setQuery(query);
// },[query])
console.log(query)

  return (
    <div className={`container`}>
      <input
        name='query'
        onChange={e => setQuery(e.target.value)}
        autoComplete='off'
        placeholder={placeholder}
        className={`input`}
      />
      <Link
        to="/search"
        state={{query}}
      >
      <Button variant="primary" type="submit">
          Submit
      </Button>
      </Link>
    </div>
  );
};

export default SearchForm;