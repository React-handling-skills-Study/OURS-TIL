import React from "react";

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="flex mt-12">
      {urlToImage && (
        <div className="mr-4">
          <a href={url}>
            <img
              className="
            block w-40 h-24
            "
              src={urlToImage}
              alt="thumbnail"
            />
          </a>
        </div>
      )}
      <div className="">
        <h2 className="mr-0">
          <a
            className="text-blue-800 underline"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h2>
        <p className="mr-0 leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
