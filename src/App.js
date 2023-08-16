import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Forms from "./components/Forms";
import Confirmation from "./components/Confirmation";
import Loader from "./components/Loader";
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
