import React, { useEffect, useState } from "react";
import "./App.css";
import AppChild from "./AppChild";
import StateUpdate from "./components/01_StateUpdate/StateUpdate";
import EmpCard from "./components/02_Props/EmpCard";
import Parent from "./components/03_StateLift/Parent";
import GetComments from "./components/04_Api-Calls/GetComments";
import useCounter from "./components/05_Custom-Hooks/useCounter";
import Input from "./components/05_Custom-Hooks/Input";

function App() {
  // const counter = useCounter(true);
  return (
    <div className="App">
      {/* <EmpCard name="Hemanth" age="25" />         
      <StateUpdate />
      <Parent />
      <GetComments /> */}
      {/* <div>{counter}</div> */}
      {/* <Input /> */}
    </div>
  );
}

export default App;
