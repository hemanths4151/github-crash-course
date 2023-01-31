import React, { useState, useEffect } from "react";

function GetComments() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data?.map((data) => (
        <p key={data.it}>{data.name}</p>
      ))}
    </div>
  );
}

export default GetComments;
