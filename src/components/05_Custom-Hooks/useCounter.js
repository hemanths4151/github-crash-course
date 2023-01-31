import React, { useState, useEffect } from "react";

function useCounter(forwards) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if ((forwards = true)) setCounter((prevState) => prevState + 1);
      if ((forwards = false)) setCounter((prevState) => prevState - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [forwards]);

  return counter;
}

export default useCounter;
