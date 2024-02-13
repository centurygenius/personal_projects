import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Footer from "./Footer";

function NewsBoard ({category}) {
    const MY_KEY = process.env.REACT_APP_API_KEY_NEWS_APP;
    const [articles, setArticles] = useState([]);
    

    useEffect(()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${MY_KEY}`;
        fetch(url).then(response=> response.json().then(data=> setArticles(data.articles)))
    }, [category, MY_KEY])

    return (
        <div className="nav-board-div">
            <h2 className="text-center">Breaking <span className="badge bg-danger">News</span></h2>
           
            {articles.map((news, index)=> {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}

            <div className="bg-body-tertiary" data-bs-theme="dark">
                <Footer />
            </div>
        </div>
    );
}
export default NewsBoard;