import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./pages/Links";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <BrowserRouter>
      <div>전체 영역에서 공통되게 나오려면 Route 밖에 적자!</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
