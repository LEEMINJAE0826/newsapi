const API_KEY = `230f1fb4e9f84766874e11aa6aa765d0`;
let news = [];

const getLatesNews = async () => {
  const url = new URL(
    `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&pageSize=${8}` //누나스터디용 url 세팅
  );
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("data", news);
};

getLatesNews();
