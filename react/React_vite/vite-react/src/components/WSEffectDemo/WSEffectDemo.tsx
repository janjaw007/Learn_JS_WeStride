import React, { useState, useEffect, useContext } from "react";
import { TopicContext } from "../../context/TopicContext";

type Props = {};

const LifeCycleDemo = ({ random, number, data }: any) => {
  const [topic, setTopic] = useContext(TopicContext);

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
  }, [random]);

  return (
    <div>
      <p>I am a demo !</p>
      <p>{data}</p>
      <button onClick={() => setTopic(random)}>change Topic {topic}</button>
    </div>
  );
};

export default function WSEffectDemo({ data }: any) {
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
      {mount && <LifeCycleDemo random={random} number={1} data={data} />}
    </div>
  );
}
