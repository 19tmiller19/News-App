import { useState , useEffect} from "react"
import NewsItem from "./NewsItem";


const Newsboard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=6aaae871558643f9ab6bc16736edeed9`;
        fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles));
    },[])

  return (
  <div>
    <h2>Latest<span className="badge bg-danger"> News</span></h2>
    {articles.map((news, index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
    })}
  </div>
);
}

export default Newsboard