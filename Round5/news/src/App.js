import NewsPage from "./pages/NewsPage";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import React, { useState } from "react";

export const apiContext = React.createContext();
export const articlesContext = React.createContext();
export const paginationContext = React.createContext();
const App = () => {
  const apiKey = "5f744f50b24a43b1ae5ed7997a51f240";
  const [articles, setArticles] = useState([]);
  const [articlesPerPage, setArticlesPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const startingPoint = (currentPage - 1) * articlesPerPage;

  return (
    <paginationContext.Provider
      value={{
        articlesPerPage,
        setArticlesPerPage,
        currentPage,
        setCurrentPage,
        startingPoint,
      }}
    >
      <articlesContext.Provider value={{ articles, setArticles }}>
        <apiContext.Provider value={apiKey}>
          <Routes>
            <Route path="/" element={<NewsPage />} />
            <Route path="/:category" element={<NewsPage />} />
          </Routes>
        </apiContext.Provider>
      </articlesContext.Provider>
    </paginationContext.Provider>
  );
};

export default App;
