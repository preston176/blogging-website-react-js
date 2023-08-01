
import './App.css'

import BlogsSection from './Components/BlogsSection'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import { useState, useEffect } from 'react';
import WriteBlog from './Components/WriteBlog';

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
      fetch('https://whispering-falls-32785-62b22573fe66.herokuapp.com/api/newsData')
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
