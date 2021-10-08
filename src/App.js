import "./styles.css";

import { useState } from "react";

let updateState;
let updateChild;

function Child1(props) {
  const [text, setText] = useState("Initial State");
  updateState = (text) => setText(text);

  return (
    <div>
      <div>I am Child</div>
      <div>{text}</div>
    </div>
  );
}

function App() {
  updateChild = (text) => {
    updateState(text);
  };

  return (
    <div>
      <div>I am Parent</div>
      <input
        type="text"
        placeholder="Write text"
        onChange={(e) => updateChild(e.target.value)}
      />
      <Child1 />
    </div>
  );
}

export default App;
