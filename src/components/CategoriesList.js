import { Link } from "gatsby"
import React from "react"
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
} from "react-bootstrap"

const CategoriesList = ({ categories }) => {
  return (
    <div className="category-list-container mb-5">
      <ListGroup variant="flush">
        {categories &&
          categories.map((item, index) => {
            const category = item.node

            if (category.parentId === null && category.posts.nodes.length > 0) {
              return (
                <ListGroup.Item>
                  <Link to={category.uri}>{category.name} </Link>
                  {category.wpChildren.nodes.map((child, index) => {
                    return (
                      <ListGroup>
                        <ListGroup.Item>
                          <Link to={child.uri}>{child.name}</Link>
                        </ListGroup.Item>
                      </ListGroup>
                    )
                  })}
                </ListGroup.Item>
              )
            }
          })}
      </ListGroup>
    </div>
  )
}

export default CategoriesList
