import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
/**
   Butonu işlevsel hale getirin
   Butona  her tıklandığında 'Toggle Change' dizesini değiştirmeli (göstermeli/gizlemelidir)

**/
function App() {
  const [text, setText] = useState("Toggle Challenge");
  function textChange() {
    text === "Toggle Challenge" ? setText("") : setText("Toggle Challenge");
  }
  return (
    <>
      <button onClick={textChange}>Hide Element Below</button>
      <div>{text}</div>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
