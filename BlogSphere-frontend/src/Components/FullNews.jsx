import  { useState , useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const FullNews = () => {
    const [newsData, setNewsData] = useState([])

useEffect(() => {
    fetch('https://crud-db-three.vercel.app/newsData')
    .then(Response => Response.json())
    .then(data => setNewsData(data))
},[])

  // Use `useParams` to get the `id` parameter from the URL
  const { id } = useParams();

  // Find the specific news item based on the `id`
  const selectedNews = newsData.find(item => item.id === parseInt(id));

  // Check if the news item exists
  if (!selectedNews) {
    return <div>News not found</div>;
  }

  return (
    <div>
      <Container>
        <div className="img_fullNews">
            <img src={selectedNews.imgURL} alt="" />
        </div>
        <h2>{selectedNews.title}</h2>
        <p>{selectedNews.description}</p>
        <p>{selectedNews.content}</p>
        {/* You can display additional details here */}
      </Container>
    </div>
  );
};

export default FullNews;
