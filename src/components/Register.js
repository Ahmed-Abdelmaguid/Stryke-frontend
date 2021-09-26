import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Services } from "../actions/index";

const Register = (data) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (req, res) => {
    const reg = {
      name,
      email,
      password,
    };
    await Services.registerUser(reg);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit" href="/api/verify">
        Submit
      </Button>
    </Form>
  );
};

export default Register;
