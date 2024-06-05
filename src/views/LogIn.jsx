import "./LogIn.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const LogIn = ({ setVisible }) => {
  const navigate = useNavigate();

  function handleAbsence(e) {
    e.preventDefault();
    setVisible(true);
    navigate("/home");
  }

  return (
    <div className="logInBg">
      <Container>
        <Row className="d-flex align-items-center justify-content-between gap-2">
          <Col md={6} className="colStart">
            <section className="d-flex flex-column justify-content-between">
              <div>
                <p className="m-0">Attendance</p>
                <p className="subAttendance">for your business</p>
              </div>
              <p className="lorem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </section>
          </Col>
          <Col md={5} className="colEnd">
            <section className="d-flex flex-column justify-content-between">
              <div className="logInBase">
                <label>Matrix Number</label>
                <input type="number" />
              </div>
              <div className="logInBase">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="g3">
                <Button onClick={handleAbsence}>Sign in</Button>
              </div>
              <p>Forgot Password?</p>
              <div className="g6">
                <span className="span1">Don't have an account?</span>
                <span className="span2 ms-2">Register Here</span>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogIn;
