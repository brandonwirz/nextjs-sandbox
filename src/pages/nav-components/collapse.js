import React, { useState } from "react";
import {
  Collapse,
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Example() {
  const [open, setOpen] = useState(false);
  //  <FontAwesomeIcon icon="fa-solid fa-chevron-down" />;

  function openMenu() {
    setOpen(!open);
  }
  return (
    <Container>
      <Form>
        <Row className="align-items-center">
          <Col sm={12} lg={4} className="my-1">
            <Form.Label htmlFor="search">User Name</Form.Label>
            <Form.Label htmlFor="search" visuallyHidden>
              Search
            </Form.Label>

            <InputGroup>
              <Form.Control id="search" placeholder="Search" />
              <InputGroup.Text>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>
            </InputGroup>
          </Col>

          <Col sm={12} lg={2} className="my-1">
            <Form.Label htmlFor="type">Select Type</Form.Label>
            <Form.Label htmlFor="type" visuallyHidden></Form.Label>

            <br />
            <Form.Select id="type">
              <option>Type 1</option>
              <option>Type 2</option>
              <option>Type 3</option>
            </Form.Select>
          </Col>

          <Col sm={12} lg={2} className="my-1">
            <Form.Label htmlFor="email">Email</Form.Label>

            <Form.Label htmlFor="email" visuallyHidden></Form.Label>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control id="email" placeholder="Search" />
            </InputGroup>
          </Col>
          <Col sm={12} lg={2} className="my-1">
            <Form.Label htmlFor="phone">Phone</Form.Label>

            <Form.Label htmlFor="phone" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id="phone" placeholder="Search" />
          </Col>
          <Col sm={12} lg={2}>
            <Form.Label id="a-search" htmlFor="advanced-search">
              Advanced Search
            </Form.Label>

            <Button
              variant="outline-secondary"
              className="advanced-search"
              onClick={openMenu}
              aria-controls="example-collapse-form"
              aria-expanded={open}
              id="advanced-search"
            >
              Advanced Search
            </Button>
          </Col>
        </Row>

        <br />
        <Collapse
          in={open}
          id="example-collapse-form"
          className="margin-top-20px"
        >
          <Row>
            <Col sm={2}>
              <Form.Label htmlFor="phone">City/State</Form.Label>

              <Form.Label
                htmlFor="inlineFormInputName"
                visuallyHidden
              ></Form.Label>
              <Form.Control id="inlineFormInputName" placeholder="Search" />
            </Col>
            <Col sm={2}>
              <Form.Label htmlFor="Profile State">Profile Role</Form.Label>
              <Form.Label
                htmlFor="inlineFormInputName"
                visuallyHidden
              ></Form.Label>
              <Form.Control id="inlineFormInputName" placeholder="Search" />
            </Col>
            <Col sm={2}>
              <Form.Label htmlFor="Profile State">Profile State</Form.Label>
              <Form.Label
                htmlFor="inlineFormInputName"
                visuallyHidden
              ></Form.Label>
              <Form.Control id="inlineFormInputName" placeholder="Search" />
            </Col>
            <Col sm={2}>
              <Form.Label htmlFor="Last-Modified">Last Modified</Form.Label>
              <Form.Label
                htmlFor="inlineFormInputName"
                visuallyHidden
              ></Form.Label>
              <Form.Control id="Last-Modified" placeholder="Last Modified" />
            </Col>
            <Col sm={2}>
              <Form.Label htmlFor="custom-field">Active</Form.Label>
              <Form.Label htmlFor="custom-field" visuallyHidden></Form.Label>
              <Form.Select id="type">
                <option>Select Active </option>
                <option>Active 2</option>
                <option>Not Active</option>
              </Form.Select>
            </Col>

            <Col sm={2}>
              <Form.Label htmlFor="Active">Active</Form.Label>

              <InputGroup className="mb-3" id="active-box">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <Form.Control
                  placeholder="Active"
                  aria-label="Text input with checkbox"
                />
              </InputGroup>
            </Col>
          </Row>
        </Collapse>
      </Form>
    </Container>
  );
}
export default Example;
