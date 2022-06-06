import NewsItem from "./NewsItem";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { apiContext, articlesContext, paginationContext } from "../App";

const NewsList = ({ category }) => {
  const [loading, setLoading] = useState(false);

  const { articles, setArticles } = useContext(articlesContext);
  const apiKey = useContext(apiContext);
  const { articlesPerPage, startingPoint } = useContext(paginationContext);

  // 페이지당 필요한 개수에 맞게 슬라이스한 slicedArticles
  const slicedArticles = articles?.slice(
    startingPoint,
    startingPoint + articlesPerPage
  );

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
  if (!articles.length) {
    return null;
  }

  //articles 값이 유효할 때
  return (
    <div className="box-border pb-12 w-auto mt-8 pl-4 pr-4">
      {slicedArticles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
