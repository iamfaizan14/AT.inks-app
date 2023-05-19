import React, { useState } from "react";
import "./tabs.css";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabs">
      <div className="tabs-nav">
        {props.tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">{props.tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
