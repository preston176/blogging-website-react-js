import { Container } from 'react-bootstrap'

const WriteBlog = () => {
  return (
    <div>
        <Container>
      <h2 className='text-center'>Do you want to sumbit your blog?</h2>
      <form className='form-control d-flex flex-column shadow'>
        <label htmlFor="#name">Enter your name</label>
        <input className='my-2' type="text" placeholder='Your name ...' id='name' />
        <label  htmlFor="#name">Blog title</label>
        <input className='my-2' type="text" placeholder='Give the suitable heading for your blog...' id='name' />
     <label htmlFor="img">Image link</label>
      <input type="text" placeholder='image URL' id='img' className='my-2'/>
      <textarea name="" id="" cols="30" rows="10" maxLength={100} placeholder='type here'></textarea>
      <button className='btn btn-primary my-2'>Submit</button>
      </form>
      </Container>
    </div>
  )
}

export default WriteBlog
