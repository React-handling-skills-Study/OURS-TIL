import NewsItem from "./NewsItem";
import React, { useState, useEffect, useDebugValue, useContext } from "react";
import axios from "axios";
import { apiContext } from "../App";

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = useContext(apiContext);
  console.log(apiKey);

  useEffect(() => {
    //async를 함수 내부에서 쓰는 함수를 따로 선언함
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`
        );
        setArticles(res.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  //대기 중일 때
  if (loading) {
    return <div>로딩......</div>;
  }
  // 아직 article의 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }
  console.log(articles);

  //articles 값이 유효할 때
  return (
    <div className="box-border pb-12 w-auto mt-8 pl-4 pr-4">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
