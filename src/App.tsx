import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ListRequest from "./pages/listRequest";
import Dashboard from "./pages/dashboard";

//import { useState } from "react";

import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="listrequest" element={<ListRequest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
