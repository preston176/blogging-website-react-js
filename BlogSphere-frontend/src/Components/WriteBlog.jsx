import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const WriteBlog = () => {
  const date = new Date()
  const now = date.toLocaleDateString()
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    author: '',
    category: "",
    imgURL: "https://img.freepik.com/premium-vector/screen-saver-breaking-news-background-urgent-news-release-television_47243-1559.jpg?w=1060",
    description: "",
    content: "",
    timestamp: `${now}`
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    const sendData = async () => {
      try {
        const response = await fetch('https://crud-db-three.vercel.app/newsData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(blog), // Pass the blog state in JSON.stringify
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        // Handle successful response (e.g., show success message)
        console.log('Blog post created successfully!');
        const toastSuccess = () => toast.success('Blog post created successfully!');
        toastSuccess();
        navigate('/')
      } catch (error) {
        // Handle error (e.g., show error message)
        console.error('Error creating blog post:', error);
        const toastError = () => toast.error('Error creating blog post');
        toastError();
      }
    };
    sendData();
  }



  return (
    <div>
      <Container>
        <h2 className='text-center my-2'>Do you want to submit your blog?</h2>
        <form onSubmit={handleSubmit} className='form-control d-flex flex-column shadow'>
          <label htmlFor="#name">Enter your name</label>
          <input className='my-2' type="text" placeholder='Your name ...' id='name' required value={blog.author} onChange={e => setBlog({ ...blog, author: e.target.value })} />
          <label htmlFor="#name">Blog title</label>
          <input className='my-2' type="text" placeholder='Give the suitable heading for your blog...' required id='name' value={blog.title} onChange={e => setBlog({ ...blog, title: e.target.value })} />
          <label htmlFor="#category">Category e.g. tech, sports, politics</label>
          <input className='my-2' type="text" placeholder='Categorize your post...' id='category' required value={blog.category} onChange={e => setBlog({ ...blog, category: e.target.value })} />
          <label htmlFor="img">Image link</label>
          <input type="text" placeholder='image URL (leave blank if you dont have)' id='img' required className='my-2' value={blog.imgURL} onChange={e => setBlog({ ...blog, imgURL: e.target.value })} />
          <textarea name="" id="" cols={30} rows={10} maxLength={250} minLength={5} placeholder='type here' required value={blog.content} onChange={e => setBlog({ ...blog, content: e.target.value })}></textarea>
          <button className='btn btn-primary my-2'>Submit</button>
        </form>
      </Container>
    </div>
  )
}

export default WriteBlog
