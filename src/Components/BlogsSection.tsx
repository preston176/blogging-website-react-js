import React from 'react'
import BlogCard from './BlogCard'

const BlogsSection = () => {
  return (
    <div className='blogs__Section'>
      <div className="left__Side">
          <div className="blogcard">
          <BlogCard />
          </div>
        </div>
        <div className="right__Side">
          <div className="blogcard">
          <BlogCard />
          </div>
        </div>
    </div>
  )
}

export default BlogsSection
