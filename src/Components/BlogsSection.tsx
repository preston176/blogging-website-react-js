import React from 'react'
import BlogCard from './BlogCard'

const BlogsSection = () => {
  return (
    <div>
      <div className="left--side">
          <div className="blogcard">
          <BlogCard />
          </div>
        </div>
        <div className="right--side">
          <div className="blogcard">
          <BlogCard />
          </div>
        </div>
    </div>
  )
}

export default BlogsSection
