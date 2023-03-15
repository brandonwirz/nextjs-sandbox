import Link from "next/link";
import { Container } from "react-bootstrap";

function Nav() {
  return (
    <Container>
      <nav className="nav">
        <ul className="main-nav">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/sales">Sales</Link>
          </li>
          <li>
            <Link href="/animals">Animals</Link>
          </li>
          <li>
            <Link href="/downloads">Downloads</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/accordion">Accordion</Link>
          </li>
          <li>
            <Link href="/form">Form</Link>
          </li>
          <li>
            <Link href="/collapse">Collapse</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Nav;
