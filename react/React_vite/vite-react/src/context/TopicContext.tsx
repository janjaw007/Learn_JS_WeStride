import { useState, createContext } from "react";

const TopicContext = createContext<any>("");

const TopicProvider = ({ children }: any) => {
  const [topic, setTopic] = useState("");
  const value: any = [topic, setTopic];

  return (
    <TopicContext.Provider value={value}>{children}</TopicContext.Provider>
  );
};

export { TopicContext, TopicProvider };
