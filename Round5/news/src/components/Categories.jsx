import React from "react";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
];

const Categories = ({ onSelect, category }) => {
  return (
    <div className="flex p-4 my-0 mx-auto ">
      {categories.map((c) => (
        <NavLink
          className="text-lg cursor-pointer whitespace-pre no-underline text-inherit pb-1 hover:text-red-600 ml-4"
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
          to={c.name === "all" ? "/" : `/${c.name}`}
        >
          {c.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
