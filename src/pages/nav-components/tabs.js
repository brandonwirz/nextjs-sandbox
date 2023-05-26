import { Tab, Tabs } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Tabbed from "./tabbed";
import Profiles from "./profiles";
import Contacts from "./contacts";

function UncontrolledExample() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="homes" title="Homes">
          <Tabbed />
        </Tab>
        <Tab eventKey="profiles" title="Profiles">
          <Profiles />
        </Tab>
        <Tab eventKey="contacts" title="Contacts">
          <Contacts />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default UncontrolledExample;
