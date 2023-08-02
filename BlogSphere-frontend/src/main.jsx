import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WriteBlog from './Components/WriteBlog.jsx';
import Header from './Components/Header.jsx';
import FullNews from './Components/FullNews.jsx';
import About from './Components/About.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/post' element={<WriteBlog />}></Route>
        <Route path="/news/:id" element={<FullNews />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
