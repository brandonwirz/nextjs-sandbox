import React from "react";

const CollapseEx = ({ collapsed, expanded, children }) => {
  const [isCollapsed, setIsCollapsed] = React.useState("");
  // children = <p>test...</p>;

  return (
    <div className="container">
      <div
        className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`}
        aria-expanded={isCollapsed}
      >
        <div>
          <h1>Hello</h1>
          <p>test...</p>
        </div>
        <button
          className="collapse-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "Show expanded" : "Show contracted"} content
        </button>

        {children}
      </div>
    </div>
  );
};
export default CollapseEx;
