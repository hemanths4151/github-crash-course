import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [msg, setMsg] = useState();

  const textChangeHandler = (data) => {
    setMsg(data);
  };

  return (
    <div>
      <Child onTextChange={textChangeHandler} />
      <label>Data update in Parent:{msg}</label>
    </div>
  );
}

export default Parent;
