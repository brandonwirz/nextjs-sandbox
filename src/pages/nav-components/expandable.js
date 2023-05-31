import React from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom";
import { useCollapse } from "react-collapsed";

const styles = {
  height: "100px",
  backgroundColor: "grey",
};

export default function Expandable() {
  function Collapse(props) {
    const collapseProps = useCollapse(props);
    return props.children(collapseProps);
  }
  return (
    <Container>
      <div className="Exp">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Collapse defaultOpen>
          {({ getToggleProps, getCollapseProps }) => (
            <>
              <button {...getToggleProps()}>Toggle</button>
              <div style={styles} {...getCollapseProps()}>
                <div style={{ backgroundColor: "grey", height: 300 }} />
              </div>
            </>
          )}
        </Collapse>
      </div>
    </Container>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
