
   
import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import {
  Button,
  Form,
} from "react-bootstrap"

const SearchForm = ({ onUpdate }) => {

  // Default props
  const placeholder = "Search...";

  const [query, setQuery] = useState("");

  return (
    <React.Fragment>
        <Form className="form-inline my-2 my-lg-0">
          <Form.Group className="ms-sm-2" controlId="formBasicSearch">
            <Form.Control type="text" placeholder="Search.."  onChange={e => setQuery(e.target.value)} />
          </Form.Group>
          <Link to="/search" state={{query}}>
              <Button variant="primary" type="submit" className="my-2 my-sm-0">
                Submit
              </Button>
          </Link>
        </Form>
    </React.Fragment>
  );
};

export default SearchForm;