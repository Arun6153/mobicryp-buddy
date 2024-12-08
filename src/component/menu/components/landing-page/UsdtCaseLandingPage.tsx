import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UsdtCaseLandingPage: React.FC = () => {
  return (
    <Container className="usdt-use-cases-section">
      <Row>
        <Col>
            <h2>USDT Use Cases</h2>
            <hr></hr>
            <p>
                USDT can be used for various purposes, including trading, remittances, and as a stable currency for transactions.
                Explore how Mobycryp utilizes USDT for maximizing profits and ensuring a smooth trading experience.
            </p>
            <Link to="/usdt-usecases">Learn More</Link>
        </Col>
       <Col className="d-flex justify-content-center align-items-center">
       <Image className="image-landing"
            src="assets/undrawUsecases.svg"
          />
       </Col>
       </Row>
    </Container>
  );
};

export default UsdtCaseLandingPage;