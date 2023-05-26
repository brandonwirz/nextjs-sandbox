import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavbarMain() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/nav-components/about">About</Nav.Link>
            <Nav.Link href="/nav-components/pricing">Pricing</Nav.Link>
            <Nav.Link href="/nav-components/tabs">Tabs</Nav.Link>
            <Nav.Link href="/nav-components/custom-tab">Left Tabs</Nav.Link>
            <Nav.Link href="/selectdropdown">Select Dropdown</Nav.Link>
            <Nav.Link href="/nav-components/form">Form</Nav.Link>
            <Nav.Link href="/nav-components/collapse">Collapse</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/action">Action #1</NavDropdown.Item>
              <NavDropdown.Item href="/anotheraction">
                Another action #2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;

// export default Nav;
