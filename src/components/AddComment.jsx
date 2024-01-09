import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

// Destrutturo delle props(asin) e le uso come params
const AddComment = ({ asin }) => {
  // Hook useState per definire lo stato iniziale
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  });

  // Hook useEffect per AGGIORNARE l'elementId quando cambia la prop asin
  // use effect cambia solo se cambia la prop quindi non serve l'if
  useEffect(() => {
    setComment((prevComment) => ({
      ...prevComment,
      elementId: asin,
    }));
  }, [asin]);

  // Funzione per inviare il commento
  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkNmVlZGU2Mjg4NjAwMTg4M2Y2ZWIiLCJpYXQiOjE3MDQ4MTYzNjYsImV4cCI6MTcwNjAyNTk2Nn0.HZbVqA9M26pQQWZtOGljnYPx6pvYc1Arypm1NT6vUSo",
        },
      });
      if (response.ok) {
        alert("Recensione inviata!");
        // Reset dopo l'invio
        setComment({
          comment: "",
          rate: 1,
          elementId: asin,
        });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  // Render del componente
  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            // Utilizzo del valore di commento dallo stato senza this
            value={comment.comment}
            // Aggiornamento dello stato quando il valore cambia
            onChange={(e) => setComment({ ...comment, comment: e.target.value })}
          />
          {/* se lasciassi comment:{} gli passerei un'oggetto, tuttavia ora NON vuole un oggetto. Inoltre, con lo stato fa il confronto, mentre così sostituisce direttamente !!! */}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            // Utilizzo del value di rate dallo stato senza this
            value={comment.rate}
            // Aggiornamento dello stato quando cambia il value
            onChange={(e) => setComment({ ...comment, rate: e.target.value })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
