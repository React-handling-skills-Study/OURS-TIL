import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./pages/Links";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import QueryString from "./pages/QueryString";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Header from "./pages/Header";
// import Profile2 from "./pages/Profile2";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const IsLocalStorageLoggedIn = JSON.parse(
      localStorage.getItem("isLoggedIn")
    ); // 일단 Local storage의 내용을 받아와서..
    setIsLoggedIn(IsLocalStorageLoggedIn); // isLoggedIn 상태에 반영
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/links" element={<Links />}>
            <Route
              path="profile/:id"
              element={<Profile isLoggedIn={isLoggedIn} />}
            />

            {/* https://www.reddit.com/r/reactjs/comments/qi3brp/how_to_fix_absolute_route_path_nested_under_error/ */}
          </Route>

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
    </>
  );
};

export default App;
