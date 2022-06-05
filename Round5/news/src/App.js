import NewsPage from "./pages/NewsPage";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import React from "react";

export const apiContext = React.createContext();
const App = () => {
  const apiKey = "5f744f50b24a43b1ae5ed7997a51f240";

  return (
    <apiContext.Provider value={apiKey}>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </apiContext.Provider>
  );
};

export default App;
