import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    const { book, selectedBook, changeSelectedBook } = this.props;

    return (
      <>
        <Card
          onClick={() => changeSelectedBook(book.asin)}
          style={{
            height: "500px",
            width: "250px",
            margin: "auto",
            marginBottom: "1rem",
            border: selectedBook === book.asin ? "3px solid red" : "2px solid rgba(0, 0, 0, 0.175)",
          }}
        >
          <Card.Img
            variant="top"
            src={book.img}
            alt="Book Cover"
            className="img-contain"
            style={{
              height: "22rem",
              border: "2px solid grainsboro",
            }}
          />
          <Card.Body>
            <Card.Title
              style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "black" }}
            >
              {book.title}
            </Card.Title>
            <Card.Text>- {book.price}</Card.Text>
            <Button variant="primary" onClick={() => changeSelectedBook(book.asin)}>
              Select
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
