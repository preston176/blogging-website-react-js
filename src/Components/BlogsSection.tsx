import React from 'react'
import BlogCard from './BlogCard'

const BlogsSection = ({newsData}) => {
  return (
    <div className='blogs__Section'>
      <div className="left__Side">
          {newsData.map(item => (
            <BlogCard id={item.id} category={item.category} title={item.title} description={item.description} pic={item.imgURL}/> 
          )) }
        </div>
        <div className="right__Side">
            <div className="right__Side__items">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          </div>
        </div>
    </div>
  )
}

export default BlogsSection
{/* */}