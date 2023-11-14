
import './App.css'

import BlogsSection from './Components/BlogsSection'


import { useState, useEffect } from 'react';

import ToastNotification from './Components/ToastNotification';

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('https://crud-db-three.vercel.app/newsData')
      .then(Response => Response.json())
      .then(data => setNewsData(data))

  }, [])


  return (
    <>

      <ToastNotification />
      {/* <Route path='/post' element={<WriteBlog />}></Route> */}
      <BlogsSection newsData={newsData} />

    </>
  )
}

export default App
