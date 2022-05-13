import React from "react";
import { Routes, Route } from "react-router-dom";
import Shakl1 from "./components/shakl1/Shakl1";
import Shakl10 from "./components/shakl10/Shakl10";
import Shakl11 from "./components/shakl11/Shakl11";
import Shakl12 from "./components/shakl12/Shakl12";
import Shakl13 from "./components/shakl13/Shakl13";
import Shakl14 from "./components/shakl14/Shakl14";
import Shakl15 from "./components/shakl5/Shakl5";
import Shakl2 from "./components/shakl2/Shakl2";
import Shakl3 from "./components/shakl3/Shakl3";
import Shakl4 from "./components/shakl4/Shakl4";
import Shakl5 from "./components/shakl5/Shakl5";
import Shakl6_1 from "./components/shakl6/Shakl6_1";
import Shakl7 from "./components/shakl7/Shakl7";
import Shakl8 from "./components/shakl8/Shakl8";
import Shakl9 from "./components/shakl9/Shakl9";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Shakl1 />} />
      <Route path="/shakl2" element={<Shakl2 />} />
      <Route path="/shakl3" element={<Shakl3 />} />
      <Route path="/shakl4" element={<Shakl4 />} />
      <Route path="/shakl5" element={<Shakl5 />} />
      <Route path="/shakl6" element={<Shakl6_1 />} />
      <Route path="/shakl7" element={<Shakl7 />} />
      <Route path="/shakl8" element={<Shakl8 />} />
      <Route path="/shakl9" element={<Shakl9 />} />
      <Route path="/shakl10" element={<Shakl10 />} />
      <Route path="/shakl11" element={<Shakl11 />} />
      <Route path="/shakl12" element={<Shakl12 />} />
      <Route path="/shakl13" element={<Shakl13 />} />
      <Route path="/shakl14" element={<Shakl14 />} />
      <Route path="/shakl15" element={<Shakl15 />} />
    </Routes>
  );
}

export default Router;
