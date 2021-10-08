import "./styles.css";
import { Child, updateStateByParent } from "./child";
import { updateStateBySibling } from "./sibling";

// parent
function App() {
  const updateChild = (text) => {
    updateStateByParent(text);
  };

  const updateSibling = (text) => {
    updateStateBySibling(text);
  };

  return (
    <div className="parent">
      <div>I am Parent</div>
      <input
        type="text"
        placeholder="for the child"
        onChange={(e) => updateChild(e.target.value)}
      />
      <Child />
      <input
        placeholder="for the sibling"
        onChange={(e) => updateSibling(e.target.value)}
      />
    </div>
  );
}

// end --

export default App;
