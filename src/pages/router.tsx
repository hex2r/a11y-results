import { Routes, Route } from "react-router";
import { Error } from "../components/ui";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Error message="Page is not found" />} />
    </Routes>
  );
}

export default App;
