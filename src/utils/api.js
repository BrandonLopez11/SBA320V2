const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchTopCryptos = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top cryptos:", error);
    return [];
  }
};

export const fetchCryptoDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/coins/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching crypto details:", error);
    return {};
  }
};

export const fetchCryptoNews = async (searchTerm) => {
  const NEWS_API_KEY = 'f5da89a205f648f797c5657d9a529712';
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${NEWS_API_KEY}`
    );
    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching news data:", error);
    return [];
  }
};
