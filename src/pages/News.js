import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import '../App.css';

const { Meta } = Card;

// npx create-react-app appname
// npm i antd
// npm i axios

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=381c62fd27614fcc9a63adf478bdd823"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);

  return (
    <div className="App">
          
      {news &&
        news.map((item, index) => {
          return (
            <Card
                key={index}
                hoverable
                style={{ width: "50%", width: 700, margin: 'auto', padding: "15px auto", border: "15px auto"}}
                cover={<img alt="image" src={item.urlToImage} style={{ width: 666, margin: '50px auto' }}/>}
                >
                <Meta title={item.title} description={item.content} />
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Button type="primary" style={{ margin: "10px", }}>
                    Read More
                  </Button>
                </a>
            </Card>
          );
        })}
    </div>
  );
}

export default News;