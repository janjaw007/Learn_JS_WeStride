import React, { useState } from "react";
import "./App.css";
import WSCounter from "./components/WSCounter/WSCounter";
import WSEffectDemo from "./components/WSEffectDemo/WSEffectDemo";
import { TopicProvider } from "./context/TopicContext";

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
      <TopicProvider>
        <WSEffectDemo data={"WS 123456"} />
      </TopicProvider>
    </div>
  );
}
