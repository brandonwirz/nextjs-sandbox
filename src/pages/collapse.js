import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Example() {
  const [open, setOpen] = useState(false);
  //  <FontAwesomeIcon icon="fa-solid fa-chevron-down" />;
  return (
    <Container>
      <Form>
        <Row className="align-items-center">
          <Col sm={4} className="my-1">
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

          <Col sm={2} className="my-1">
            <Form.Label htmlFor="name" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id="name" placeholder="Name" />
          </Col>
          <Col sm={2} className="my-1">
            <Form.Label htmlFor="email" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id="email" placeholder="Email" />
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
          <Col>
            <Button
              variant="outline-secondary"
              className="btnclick"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Advanced Search
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
              <Form.Control id="inlineFormInputName" placeholder="City/State" />
            </Col>
            <Col sm={2}>
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control
                id="inlineFormInputName"
                placeholder="Profile Role"
              />
            </Col>
            <Col sm={2}>
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control
                id="inlineFormInputName"
                placeholder="Profile State"
              />
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
              <Form.Control
                id="inlineFormInputName"
                placeholder="Last Modified"
              />
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
