import React from "react";
import { Card, Button } from "react-bootstrap";

// con distrutturazione delle props come params
const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {
  return (
    <>
      {/* onClick direttamente nelle props*/}
      <Card
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          height: "500px",
          width: "250px",
          margin: "auto",
          marginBottom: "1rem",
          // tolgo this.props
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
          <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "black" }}>
            {/* book.title direttamente senza this.props */}
            {book.title}
          </Card.Title>
          {/*book.price direttamente senza this.props */}
          <Card.Text>- {book.price}</Card.Text>
          <Button variant="primary" onClick={() => changeSelectedBook(book.asin)}>
            Select
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
