
import './App.css'

import BlogsSection from './Components/BlogsSection'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import { useState, useEffect } from 'react';
import WriteBlog from './Components/WriteBlog';

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/newsData')
      .then(Response => Response.json())
      .then(data => setNewsData(data))

  }, [])
  

  return (
    <>

      
        {/* <Route path='/post' element={<WriteBlog />}></Route> */}
      <BlogsSection newsData={newsData} />
      
    </>
  )
}

export default App
