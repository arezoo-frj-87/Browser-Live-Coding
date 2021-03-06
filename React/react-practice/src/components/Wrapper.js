import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Wrapper({ data }) {
  return (
    <div className="row">
      {data.map((item) => {
        return (
          <Link to={ {pathname:`/recipe/${item.recipe.label}` , state:item} }>
            <Card style={{ width: "18rem" }} className="col-md-4">
              <Card.Img variant="top" src={item.recipe.image} />
              <Card.Body>
                <Card.Title>{item.recipe.label}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
