import React, { useEffect, useState } from "react";
import { fetchCryptoNews } from "../utils/api";
import "../styles.css";

export default function CryptoNews({ searchTerm }) {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      if (searchTerm.trim().length > 0) {
        const newsData = await fetchCryptoNews(searchTerm);
        setNewsArticles(newsData.slice(0, 3)); // Limit to only 3 articles
      }
    };
    getNews();
  }, [searchTerm]);

  return (
    <div className="crypto-news">
      <h3>Crypto News</h3>
      {newsArticles.length > 0 ? (
        <ul className="news-list">
          {newsArticles.map((article, index) => (
            <li className="news-item" key={index}>
              <a href={article.url} target="_blank" rel="noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news articles available for this search term.</p>
      )}
    </div>
  );
}
