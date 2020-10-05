import React, { useContext } from 'react'
import BlogContext from '../context/blogContext';


const EachBlog = ({blog}) => {
  const {removeBlog} = useContext(BlogContext)
  const {id, title, description} = blog;

  const handleRemove = () =>{
    removeBlog(id)
  }
  return (
    <div className="guest-card">
    <div className="card-head">
        <div></div>
      
      <div>
        <button>
          <i  className="fa fa-pencil-square-o"></i>
        </button>
        <button onClick={handleRemove}>
          <i className="fas fa-trash-alt remove"></i>
        </button>
      </div>
    </div>
    <div className="card-body">
      <h2>{blog.title}</h2>
      <div className="contact">
        <p>{blog.description}</p>
      </div>
    </div>
  </div>
  )
}
export default EachBlog