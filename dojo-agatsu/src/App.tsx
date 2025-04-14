import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Galeria from "./pages/Galeria";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Galeria />} />
    </Routes>
  );
}

export default App;
