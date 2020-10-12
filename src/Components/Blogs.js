import React, { useContext } from 'react'
import BlogContext from '../context/blogContext'
import EachBlog from './EachBlog'


const Blogs = () => {
  const {blogs} = useContext(BlogContext)
  return (
    
    <div className="app-container" >
      <div className="blogs">
      {blogs.map(blog => <EachBlog key={blog.id} blog={blog}/>)}
      </div>
    </div>
    
  )
}
export default Blogs