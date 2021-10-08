import { useState } from "react";

// global function for use in the parent
export let updateStateByParent;

// child
export function Child(props) {
  const [text, setText] = useState("Initial State");
  updateStateByParent = (text) => setText(text);

  return (
    <div className="child">
      <div>I am Child</div>
      <div className="highlighted">{text || "Initial State"}</div>
    </div>
  );
}
