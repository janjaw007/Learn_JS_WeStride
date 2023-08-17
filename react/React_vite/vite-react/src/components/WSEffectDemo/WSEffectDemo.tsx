import React, { useState, useEffect } from "react";

type Props = {};

const LifeCycleDemo = ({ random, number }: any) => {
  useEffect(() => {
    console.log("I am side effect !");

    return () => {
      console.log("I am cleanup effect");
    };
  });

  useEffect(() => {
    console.log("I am after mount");
  }, []);

  useEffect(() => {
    console.log("I am doing because random change");
  }, [number]);

  return (
    <div>
      <p>I am a demo !</p>
    </div>
  );
};

export default function WSEffectDemo({}: Props) {
  const [mount, setMount] = useState(true);
  const [random, setRandom] = useState(Math.random());

  const handleOnMount = () => {
    setMount(!mount);
  };

  const handleOnReRender = () => {
    setRandom(Math.random());
  };

  return (
    <div>
      <h4>Demo number: {random}</h4>
      <button onClick={() => handleOnReRender()}>Re - render</button>
      <button onClick={() => handleOnMount()}> Mount / UnMount</button>
      {mount && <LifeCycleDemo random={random} number={1} />}
    </div>
  );
}
