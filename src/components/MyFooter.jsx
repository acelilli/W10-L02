import { Container, Row, Col } from "react-bootstrap";

const MyFooter = ({ content1, content2, content3 }) => (
  <footer className="bg-danger text-white">
    <Container fluid="md">
      <Row className="py-2">
        <Col md={4}>{content1}</Col>
        <Col md={4}>{content2}</Col>
        <Col md={4}>{content3}</Col>
      </Row>
    </Container>
  </footer>
);

export default MyFooter;
