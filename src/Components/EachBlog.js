import React from 'react'


const EachBlog = ({blog}) => {
  const {id, title, description} = blog;
  return (
    <div className="guest-card">
    <div className="card-head">
        <div></div>
      
      <div>
        <button>
          <i className="fas fa-user-edit"></i>
        </button>
        <button>
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