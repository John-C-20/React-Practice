import { useState } from "react";

// for use in the sibling
export let updateStateBySibling;

// for use in parent, next to the sibling
export function Sibling(props) {
  const [text, setText] = useState("Initial Sibling State");
  updateStateBySibling = (text) => setText(text);

  return (
    <div className="parent">
      <div>I am Sibling</div>
      <div className="highlighted">{text || "Initial Sibling State"}</div>
    </div>
  );
}
