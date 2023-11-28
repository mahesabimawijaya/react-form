import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Register />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
