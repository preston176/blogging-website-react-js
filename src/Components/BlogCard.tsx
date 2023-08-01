import React from 'react'

const BlogCard = ({id, category, description, title, pic}) => {
  return (
    <div className='blog__Card'>
        <div className="img__Container">
      <img src={pic}alt="news-pic" />
      </div>
      <p className='blog__timestamp'>timestamp</p>
      <h4>{title}</h4>
      <p className='blog__description'>{description}</p>
    <div className="category__container">
        <button className='btn active'>{category}</button>
    </div>
    <button className='btn btn-primary'>Read More</button>
    </div>
  )
}

export default BlogCard
