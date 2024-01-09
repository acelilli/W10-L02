import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <MyNav brand="EpiBooks" claim="Week 10 Lesson 02" />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
      </Container>
      <MyFooter
        content1={
          <ul>
            <li>Policy</li>
            <li>Termini di servizio</li>
            <li>Contatti</li>
          </ul>
        }
        content2={
          <ul>
            <li>Autori</li>
            <li>Catalogo</li>
            <li>Case Editrici</li>
          </ul>
        }
        content3={
          <ul>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Work With Us</li>
          </ul>
        }
      />
    </>
  );
}

export default App;
