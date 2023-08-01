
import './App.css'
import BlogCard from './Components/BlogCard'
import BlogsSection from './Components/BlogsSection'
import Header from './Components/Header'
import { useState, useEffect } from 'react';

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/newsData')
      .then(Response => Response.json())
      .then(data => setNewsData(data))

  }, [])
  

  return (
    <>
      <Header />
    
      <BlogsSection newsData={newsData} />
    </>
  )
}

export default App
