import React from "react";
import { Routes, Route } from "react-router-dom";
import Second from "./components/Second";
import First from "./components/First";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/second" element={<Second />} />
    </Routes>
  );
}

export default Router;
