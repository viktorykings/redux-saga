const URL =
  "https://hn.algolia.com/api/v1/search?query=react&hitsPerPage=10&page=0";

export const fetchLatestNews = async (url: string = URL) => {
  const res = await fetch(url);
  return await res.json();
};

export const fetchPopularNews = async (
  url: string = "https://hn.algolia.com/api/v1/search?query=&hitsPerPage=10&page=0"
) => {
  const res = await fetch(url);
  return await res.json();
};
