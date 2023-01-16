import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Week1 from "./pages/Week1";
import Week2 from "./pages/Week2";
import Week3 from "./pages/Week3";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="week-1/*" element={<Week1 />} />
        <Route path="week-2/*" element={<Week2 />} />
        <Route path="week-3/*" element={<Week3 />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
