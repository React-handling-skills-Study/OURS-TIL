import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./pages/Links";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import QueryString from "./pages/QueryString";
import Profile2 from "./pages/Profile2";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/links" element={<Links />} />
        <Route
          path="/profile/:id"
          element={<Profile isLoggedIn={isLoggedIn} />}
        />
        <Route path="/profile" element={<Profile />} />

        <Route path="/querystring" element={<QueryString />} />
        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
