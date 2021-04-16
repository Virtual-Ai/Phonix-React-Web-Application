import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoURAS2kwFuhokGfqgGJ2oUWV95Mnw0r0",
  authDomain: "react-grammar-app.firebaseapp.com",
  projectId: "react-grammar-app",
  storageBucket: "react-grammar-app.appspot.com",
  messagingSenderId: "797313993235",
  appId: "1:797313993235:web:8203ccedbe7110ae34cde6",
};
class Signup extends Component {
  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    this.state = { email: "", password: "", redirect: null };
    //
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePassChange(e) {
    this.setState({ password: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    var email = this.state.email.trim();
    var password = this.state.password.trim();

    var flag = 0;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        flag = 1;
        var errorMessage = error.message;
        alert("errorMessage: " + errorMessage);
      });

    if (email !== "" && password !== "" && flag === 0) {
      this.setState({ redirect: Routes.Signin.path });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={Routes.Signin.path} />;
    }
    return (
      <main>
        <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
          <Container>
            <p className="text-center">
              <Card.Link
                as={Link}
                to={Routes.Presentation.path}
                className="text-gray-700"
              >
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
                homepage
              </Card.Link>
            </p>
            <Row
              className="justify-content-center form-bg-image"
              style={{ backgroundImage: `url(${BgImage})` }}
            >
              <Col
                xs={12}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h3 className="mb-0">Create an account</h3>
                  </div>
                  <Form className="mt-4">
                    <Form.Group id="confirmPassword" className="mb-4">
                      <Form.Label>Name</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUser} />
                        </InputGroup.Text>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Name"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group id="email" className="mb-4">
                      <Form.Label>Your Email</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                        <Form.Control
                          value={this.state.email}
                          onChange={this.handleEmailChange}
                          autoFocus
                          required
                          type="email"
                          placeholder="example@company.com"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          value={this.state.password}
                          onChange={this.handlePassChange}
                          required
                          type="password"
                          placeholder="Password"
                        />
                      </InputGroup>
                    </Form.Group>

                    <FormCheck type="checkbox" className="d-flex mb-4">
                      <FormCheck.Input required id="terms" className="me-2" />
                      <FormCheck.Label htmlFor="terms">
                        I agree to the{" "}
                        <Card.Link>terms and conditions</Card.Link>
                      </FormCheck.Label>
                    </FormCheck>

                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100"
                      onClick={this.handleSubmit}
                    >
                      Sign up
                    </Button>
                  </Form>

                  <div className="mt-3 mb-4 text-center">
                    <span className="fw-normal">or</span>
                  </div>
                  <div className="d-flex justify-content-center my-4">
                    <Button
                      variant="outline-light"
                      className="btn-icon-only btn-pill text-facebook me-2"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </Button>
                    <Button
                      variant="outline-light"
                      className="btn-icon-only btn-pill text-twitter me-2"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </Button>
                    <Button
                      variant="outline-light"
                      className="btn-icon-only btn-pil text-dark"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <span className="fw-normal">
                      Already have an account?
                      <Card.Link
                        as={Link}
                        to={Routes.Signin.path}
                        className="fw-bold"
                      >
                        {` Login here `}
                      </Card.Link>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    );
  }
}

export default Signup;
