import { Navbar, Nav, Container } from "react-bootstrap";

const MyNav = ({ brand, claim }) => (
  <Navbar expand="lg" bg="danger" data-bs-theme="dark" className="mb-md-4">
    <Container fluid="md">
      <Navbar.Brand href="#home">
        {brand} - {claim}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
