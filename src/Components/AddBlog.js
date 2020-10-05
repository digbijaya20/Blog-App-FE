import React, { useState, useContext } from "react";
import BlogContext from "../context/blogContext";

const AddBlog = () => {
    const {addBlog} = useContext(BlogContext)
    const [blog, setBlog] = useState({
        title:"",
        description:""
    })

    const handleChange = e =>{
        setBlog({
            ...blog,
            [e.target.name] : e.target.value
        })
    }

    const onsubmit = e =>{
        e.preventDefault()
        addBlog(blog)
        setBlog({
            title:"",
            description:""
        })
    }

    const {title, description} = blog;
    return(
        <div className="addblog">
            <h1>What's on your mind?</h1>
            <form onSubmit={onsubmit}>
                <input type="text"  placeholder="Title" name="title" value={title} onChange={handleChange}/>
                <textarea type="textarea" name="description" placeholder="What's happening?" value={description}
                onChange={handleChange}
                />
                <input type="submit" value="Add" className="btn" />
                <button className="btn" style={{backgroundColor:"red"}}>Cancel</button>
            </form>

        </div>
    )
}

export default AddBlog;