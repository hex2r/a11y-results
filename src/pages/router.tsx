import { Routes, Route } from "react-router";
import { NotFound } from "../components";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
