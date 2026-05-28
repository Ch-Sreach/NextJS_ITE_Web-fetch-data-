"use client";

import { useState } from "react";

export default function ButtonStateComponent() {
    // handle click
    // normal variable
    let count = 0;
    function handleClick() {
        count = count + 1;
        console.log("Count with normal variable", count)
    }

    // state
    // let stateCount = 0;
    let [stateCount, setStateCount] = useState<number>(0);
    function stateHandleClick() {
        stateCount = stateCount + 1;
        setStateCount(stateCount);
    }
  return (
    <>
        {/* with normal variable */}
        <button className="bg-green-600 px-8 py-5 m-5" onClick={stateHandleClick}>Count: {stateCount}</button>
        {/* with state */}
        <button onClick={handleClick} className="bg-blue-400 px-8 py-5 m-5">Count: {count}</button>
    </>
  )
}
