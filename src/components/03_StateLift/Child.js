import React, { useState } from "react";

function Child(props) {
  const changeHandler = (e) => {
    props.onTextChange(e.target.value);
  };

  return (
    <div>
      <label>Data entered in Child component:</label>
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default Child;
