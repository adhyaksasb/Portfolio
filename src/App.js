import Home from "./components/Home";
import Confirmation from "./components/Confirmation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message-sent" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
