import React, { useState, useReducer } from "react";
import { counterReducer, actions, initiaclCount } from "../../reducer/counter";

type Props = {};

export default function WSCounter({}: Props) {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(counterReducer, initiaclCount);
  return (
    <div>
      {count}
      <br />
      <button onClick={() => dispatch({ type: actions.increment })}>+</button>
      <button onClick={() => dispatch({ type: actions.decrement })}>-</button>
      <button onClick={() => dispatch({ type: actions.reset })}>reset</button>
    </div>
  );
}
