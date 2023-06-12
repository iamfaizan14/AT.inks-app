import React, { useState } from "react";

const ListContainer = ({ list }) => {
  const [showFullList, setShowFullList] = useState(false);

  const toggleShowFullList = () => {
    setShowFullList(!showFullList);
  };

  return (
    <div style={{ maxHeight: "200px", overflow: "hidden" }}>
      {list.slice(0, showFullList ? list.length : 3).map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {!showFullList && list.length > 3 && (
        <button onClick={toggleShowFullList}>{showFullList?"See Less":"See All"}</button>
      )}
    </div>
  );
};

export default ListContainer;
