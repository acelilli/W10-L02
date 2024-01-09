import { Component, useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

// ricordati di mettere le props da class a funzione!!!!!
// avrei potuto scrivere direttamente {asin} al posto di props (poi avrei dovuto scrivere direttamente asin) ma NB! dovevano rimanere le {} !
const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // };

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization:
  //             'Bearer inserisci-qui-il-tuo-token',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // setto gli stati che uso dopo uno alla volta, richiamandoli come se fossero funzioni

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkNmVlZGU2Mjg4NjAwMTg4M2Y2ZWIiLCJpYXQiOjE3MDQ4MTYzNjYsImV4cCI6MTcwNjAyNTk2Nn0.HZbVqA9M26pQQWZtOGljnYPx6pvYc1Arypm1NT6vUSo",
          },
        });

        console.log(response);

        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchData();
  }, [props.asin]); // così controlla quando cambia asin

  // componentDidUpdate = async (prevProps) => {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       isLoading: true,
  //     });
  //     try {
  //       let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThhZWFhYThjOWNlZDAwMTg4MzEwZTYiLCJpYXQiOjE3MDM2MDI4NTgsImV4cCI6MTcwNDgxMjQ1OH0.WhX4yu8trW2PtxM-v_0qgeKErtaSw3T6IRBZjPtmZ84",
  //         },
  //       });
  //       console.log(response);
  //       if (response.ok) {
  //         let comments = await response.json();
  //         this.setState({
  //           comments: comments,
  //           isLoading: false,
  //           isError: false,
  //         });
  //       } else {
  //         this.setState({ isLoading: false, isError: true });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       this.setState({ isLoading: false, isError: true });
  //     }
  //   }
  // };
  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
