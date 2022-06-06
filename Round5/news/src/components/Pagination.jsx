import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { articlesContext } from "../App";
import { paginationContext } from "../App";

const Pagination = () => {
  const { articles } = useContext(articlesContext);
  const { articlesPerPage, setArticlesPerPage, currentPage, setCurrentPage } =
    useContext(paginationContext);

  const pagesRequired = Math.ceil(articles?.length / articlesPerPage);

  const [pageParams, setPageParams] = useSearchParams({});
  console.log("페이지당 기사수", articlesPerPage);
  console.log("필요한 페이지수", pagesRequired);
  console.log("현재 페이지", currentPage);

  useEffect(() => {
    setPageParams({
      page: currentPage,
    });
  }, [currentPage]);

  const queryString = pageParams.get("page");
  console.log("현재 쿼리스트링의 page 값", queryString);

  return (
    <div className="flex text-2xl w-3/4 mx-auto border-2 border-rose-600 ">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <label>
        페이지당 출력 개수
        <select
          className=" border-4 border-black"
          type="number"
          value={articlesPerPage}
          onChange={(e) => {
            setArticlesPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </label>

      {Array(pagesRequired)
        .fill()
        .map((_, i) => (
          <>
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              aria-current={currentPage === i + 1 ? "currentPage" : null}
            >
              {i + 1}
            </button>
            &nbsp;
          </>
        ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pagesRequired}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
