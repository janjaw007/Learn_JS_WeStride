import React, { useState } from "react";
import "./App.css";
import WSCounter from "./components/WSCounter/WSCounter";
import WSEffectDemo from "./components/WSEffectDemo/WSEffectDemo";

type Props = {};

export default function App({}: Props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      APP WS
      <WSCounter />
      <br />
      <hr />
      <br />
      <WSEffectDemo />
    </div>
  );
}
