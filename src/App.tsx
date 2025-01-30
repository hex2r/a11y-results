import { BrowserRouter } from "react-router";
import Router from "./pages/router";
import { Global } from "@emotion/react";
import { globalCSS } from "./Global.style";

function App() {
  return (
    <>
      <Global styles={globalCSS} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
