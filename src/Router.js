import React from "react";
import { Routes, Route } from "react-router-dom";
import Shakl1 from "./components/shakl1/Shakl1";
import Shakl2 from "./components/shakl2/Shakl2";
import Shakl3 from "./components/shakl3/Shakl3";
import Shakl4 from "./components/shakl4/Shakl4";
import Shakl5 from "./components/shakl5/Shakl5";
import Shakl6 from "./components/Shakl6";
import Shakl7 from "./components/Shakl7";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Shakl1 />} />
      <Route path="/shakl2" element={<Shakl2 />} />
      <Route path="/shakl3" element={<Shakl3 />} />
      <Route path="/shakl4" element={<Shakl4 />} />
      <Route path="/shakl5" element={<Shakl5 />} />
      <Route path="/shakl6" element={<Shakl6 />} />
      <Route path="/shakl7" element={<Shakl7 />} />
    </Routes>
  );
}

export default Router;
