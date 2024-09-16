import { useState } from "react";

import "./App.css";
import Sidebar from "./Components/sideBar";

function App() {
  const [count, setCount] = useState(0);

  return <Sidebar />;
}

export default App;
