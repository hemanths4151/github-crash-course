import React from "react";

function EmpCard(props) {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </>
  );
}

export default EmpCard;
