import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import Pagination from "../components/Pagination";

const NewsPage = () => {
  const params = useParams();

  const category = params.category || "all";
  return (
    <>
      <Categories />
      <NewsList category={category} />
      <Pagination />
    </>
  );
};

export default NewsPage;
