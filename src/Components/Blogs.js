import React, { useContext } from 'react'
import BlogContext from '../context/blogContext'
import EachBlog from './EachBlog'


const Blogs = () => {
  const {blogs} = useContext(BlogContext)
  return (
    <div className="" >
      {blogs.map(blog => <EachBlog key={blog.id} blog={blog}/>)}
    </div>
  )
}
export default Blogs