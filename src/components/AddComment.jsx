import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

// Destructuring delle props come params
const AddComment = ({ asin }) => {
  // Hook useState per definire lo stato iniziale
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  });

  // Hook useEffect per AGGIORNARE l'elementId quando cambia la prop asin
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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThhZWFhYThjOWNlZDAwMTg4MzEwZTYiLCJpYXQiOjE3MDM2MDI4NTgsImV4cCI6MTcwNDgxMjQ1OH0.WhX4yu8trW2PtxM-v_0qgeKErtaSw3T6IRBZjPtmZ84",
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
