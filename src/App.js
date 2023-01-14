import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Prayers from "./pages/Prayers";
import Plans from "./pages/Plans";
import NotFound from "./pages/NotFound";
import WeekSummary1 from "./pages/WeekSummary1";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="week-1/*" element={<WeekSummary1 />} />
        {/* <Route path="plans/*" element={<Plans />} /> */}
        {/* <Route path="prayers/" element={<Prayers />} /> */}
        {/* <Route path="questions/" element={<Questions />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
