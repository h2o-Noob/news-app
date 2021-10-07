import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const News = (props) => {
  const [articles, setArticles] = useState([]);

  const updateNews = async () => {
    const url ="https://newsapi.org/v2/everything?q=tesla&from=2021-09-07&sortBy=publishedAt&apiKey=5a43265dc839447296a9fe9a6ca49ab1";
    let data = await fetch(url);
    let ParsedData = await data.json();
    setArticles(ParsedData.articles);
    console.log(ParsedData)
  };

  useEffect(() => {
    updateNews();
  }, []);
  updateNews();

  return (
    <>
      <div className="container my-3">
        <h2 style={{ textAlign: "center" }}>NewsPaper</h2>
        <div className="row">
          {articles.map((elems) => {
            console.log(elems);
            return (
              <div className="col-md-4" key={elems.url}>
                <NewsItems title={elems.title} ImgUrl={elems.urlToImage} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
