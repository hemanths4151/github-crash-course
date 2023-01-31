import React, { useState } from "react";

function StateUpdate() {
  const [click, setClick] = useState();

  const clickHandler = () => {
    setClick((prevState) => !prevState);
  };

  return (
    <button
      onClick={clickHandler}
      style={{ backgroundColor: click ? "green" : "red" }}
    >
      Change Color
    </button>
  );
}

export default StateUpdate;
