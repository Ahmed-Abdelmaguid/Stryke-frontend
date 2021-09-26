import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Nav activeKey="/" className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="/">StrykePay</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/api/register">Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/api/login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/api/verify">Verify Email</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Header;
