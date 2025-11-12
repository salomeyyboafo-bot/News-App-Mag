import { useEffect, useState,  } from "react";
import Newsitem from "./Newsitem";


const Newsboard = ({category}) => {
  
    const[articles,setArticle] =useState([]);

    useEffect(()=>{
       let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4d3a45263be74ae2ba409b1072b19600`;
      fetch(url).then(response=> response.json()).then(data=> setArticle(data.articles));
       
    },[category])



  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{

        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default Newsboard
