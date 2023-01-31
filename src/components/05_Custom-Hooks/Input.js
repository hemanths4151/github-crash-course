import React, { useState, useEffect } from "react";
import useDebouncing from "./useDebouncing";

function Input() {
  const [inputValue, setInputValue] = useState("");

  const debounceValue = useDebouncing(inputValue, 3000);
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} />
      <div>{debounceValue}</div>
    </div>
  );
}

export default Input;
