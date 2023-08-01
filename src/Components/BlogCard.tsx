import { Link } from "react-router-dom";

const BlogCard = ({id, category, description, title, pic, timestamp}) => {
  return (
    <div className='blog__Card'>
        <div className="img__Container">
      {pic && <img src={pic}alt="news-pic" />}
      </div>
      <p className='blog__timestamp'>{timestamp}</p>
      <h4>{title}</h4>
      <p className='blog__description'>{description}</p>
    <div className="category__container">
    
       {category && <button className='btn active'>{category}</button>} 
       <Link to={`/news/${id}`} > <button className='btn btn-primary read__more'>Read More</button></Link>
       
    </div>
    
    </div>
  )
}

export default BlogCard
