import React from 'react'
import BlogCard from './BlogCard'
import { Container } from 'react-bootstrap'

const BlogsSection = ({ newsData }) => {
  return (
    <>

      <Container>
        <h2>Recent Blog posts</h2>
        <div className="blogs__Section">
          <div className="left__Side">
            {newsData.map(item => (
              <BlogCard key={item.id} id={item.id} category={item.category} title={item.title} description={item.description} pic={item.imgURL} timestamp={item.timestamp} author={item.author} />
            ))}
          </div>

          <div className="right__Side">
            <div className="right__Side__items">
              <ul>
                {newsData.map(item => (
                  <li className='side__list' key={item.id}>
                    <BlogCard id={item.id} category={item.category} title={item.title} pic={item.imgURL} timestamp={item.timestamp} author={item.author} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default BlogsSection
{/* */ }