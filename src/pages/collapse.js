import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Form>
        <Row className="align-items-center">
          <Col sm={4} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Search
            </Form.Label>
            <Form.Control id="inlineFormInputName" placeholder="Search" />
          </Col>

          <Col sm={2} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id="inlineFormInputName" placeholder="Type" />
          </Col>
          <Col sm={2} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id="inlineFormInputName" placeholder="Email" />
          </Col>
          <Col sm={2} className="my-1">
            <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
              Username
            </Form.Label>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                id="inlineFormInputGroupUsername"
                placeholder="Username"
              />
            </InputGroup>
          </Col>
          <Col sm lg="2">
            <Button
              variant="outline-secondary"
              className="btnclick"
              eventKey="link"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Advanced Search&nbsp;&nbsp;
              <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </Button>
          </Col>
        </Row>
        <br />
        <Collapse in={open} className="margin-top-20px">
          <Row>
            <Col sm={2}>
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
            </Col>
            <Col sm={2}>
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
            </Col>
            <Col sm={2}>
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
            </Col>
            <Col sm={2}>
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
            </Col>
            <Col sm={2}>
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
            </Col>
            <Col sm={2}>
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
            </Col>
          </Row>
        </Collapse>
      </Form>
    </Container>
  );
}
export default Example;
