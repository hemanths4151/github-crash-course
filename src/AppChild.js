import React, { useEffect } from "react";

function AppChild() {
  useEffect(() => {
    console.log("3");
  });

  console.log("4");

  return <div>AppChild</div>;
}

export default AppChild;
