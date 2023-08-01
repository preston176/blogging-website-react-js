import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import WriteBlog from './Components/WriteBlog.tsx';
import Header from './Components/Header.tsx';
import FullNews from './Components/FullNews.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <Header />
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<App />}></Route>
        <Route path='/post' element={<WriteBlog />}></Route>
        <Route path="/news/:id" element={<FullNews />}></Route>
</Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
