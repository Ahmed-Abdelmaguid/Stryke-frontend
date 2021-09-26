import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Services } from "../actions/index";

const Verify = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const onSubmit = async (req, res) => {
    const reg = {
      email,
      code,
    };
    console.log(email);
    console.log(code);

    await Services.verify(reg);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Code"
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit" href="/api/login">
        Submit
      </Button>
    </Form>
  );
};

export default Verify;
