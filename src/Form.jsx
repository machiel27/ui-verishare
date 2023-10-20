import React, { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  return (
    <>
      <div className="formContainer">
        <Form>
          <h3>Create Account</h3>
          <p>Create an account so you can explore all the existing jobs</p>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              className="mb-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              className="mb-3"
              isInvalid={!passwordsMatch}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (password !== e.target.value) {
                  setPasswordsMatch(false);
                } else {
                  setPasswordsMatch(true);
                }
              }}
            />
          </FloatingLabel>
          <Button type="submit">Sign up</Button>
        </Form>
        <p>Already have an account</p>
        <p>Or continue with</p>

        <div className="socialLogins">
          <span className="iconBox"> <FontAwesomeIcon icon={faGoogle} size="2x"/> </span>
          <span className="iconBox"> <FontAwesomeIcon icon={faFacebook} size="2x"/> </span>
          <span className="iconBox"> <FontAwesomeIcon icon={faApple} size="2x"/> </span>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
