import { Link } from "react-router-dom";

const BlogCard = ({id, category, description, title, pic, timestamp}) => {
  return (
    <Link className="hyper__link" to={`/news/${id}`} >
  
    <div className='blog__Card'>
        <div className="img__Container">
      {pic && <img src={pic}alt="news-pic" />}
      </div>
      <p className='blog__timestamp'>posted on: {timestamp}</p>
      <h4>{title}</h4>
      <p className='blog__description'>{description}</p>
    <div className="category__container">
    
       {category && <button className='btn active'>{category}</button>} 
      <button className='btn btn-primary read__more'>Read More</button>
       
    </div>
    
    </div>
    </Link>
  )
}

export default BlogCard
