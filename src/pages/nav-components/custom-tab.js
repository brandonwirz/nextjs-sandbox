import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import TabbedDrpDwn from "./tabbed-dropdown";

function LeftTabs() {
  return (
    <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <TabbedDrpDwn />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <TabbedDrpDwn />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default LeftTabs;
