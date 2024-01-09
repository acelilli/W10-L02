import React, { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

// books come params
const BookList = ({ books }) => {
  // Hook useState per gestire lo stato iniziale di search e selected
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  // Funzione per la gestione selezione
  const changeSelectedBook = (asin) => {
    setSelectedBook(asin);
  };

  return (
    <>
      <Row>
        <Col md={8}>
          <Row className="justify-content-center mt-2">
            <Col xs={12} md={4} className="text-center">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  // senza this
                  value={searchQuery}
                  // Aggiornamento quando il valore cambia
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="g-2 mt-3">
            {books
              .filter((b) => b.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook
                    book={b}
                    // selectedBook senza this
                    selectedBook={selectedBook}
                    // cambio libro selezionato
                    changeSelectedBook={changeSelectedBook}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4} className="mt-2 pt-5">
          {/* Valore di selectedBook dallo stato senza this */}
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
