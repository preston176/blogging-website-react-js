import React from 'react'

const BlogCard = () => {
  return (
    <div className='blog__Card'>
      <img src="https://i.ytimg.com/vi/bIgDbwbZ_So/hqdefault.jpg" alt="" />
      <p className='blog__timestamp'>timestamp</p>
      <h4>title</h4>
      <p className='blog__description'>description</p>
    <div className="category__container">
        <button className='btn active'>category</button>
    </div>
    </div>
  )
}

export default BlogCard
