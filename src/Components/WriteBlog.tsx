import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'


const WriteBlog = () => {
    const [blog, setBlog] = useState({
        title: "",
        author: '',
        category: "",
        imgURL: "",
        description: "",
        content: ""
    })

    useEffect(()=> {

    }, [])


  return (
    <div>
        <Container>
      <h2 className='text-center my-2'>Do you want to sumbit your blog?</h2>
      <form className='form-control d-flex flex-column shadow'>
        <label htmlFor="#name">Enter your name</label>
        <input className='my-2' type="text" placeholder='Your name ...' id='name' value={blog.author} onChange={e => setBlog({...blog,author: e.target.value})}/>
        <label  htmlFor="#name">Blog title</label>
        <input className='my-2' type="text" placeholder='Give the suitable heading for your blog...' id='name' value={blog.title} onChange={e => setBlog({...blog,title: e.target.value})}/>
        <label  htmlFor="#category">Category e.g. tech, sports, politics</label>
        <input className='my-2' type="text" placeholder='Categorize your post...' id='category' value={blog.category} onChange={e => setBlog({...blog,category: e.target.value})}/>
     <label htmlFor="img">Image link</label>
      <input type="text" placeholder='image URL' id='img' className='my-2' value={blog.imgURL} onChange={e => setBlog({...blog,imgURL: e.target.value})}/>
      <textarea name="" id="" cols="30" rows="10" maxLength={100} placeholder='type here' value={blog.content} onChange={e => setBlog({...blog,content: e.target.value})}></textarea>
      <button className='btn btn-primary my-2'>Submit</button>
      </form>
      </Container>
    </div>
  )
}

export default WriteBlog
