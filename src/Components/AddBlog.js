import React, { useState, useContext, useEffect } from "react";
import BlogContext from "../context/blogContext";

const AddBlog = () => {
    const { addBlog, editAble, updateBlog, clearEdit } = useContext(BlogContext)
    const [blog, setBlog] = useState({
        title: "",
        description: ""
    })

    useEffect(() => {
        if (editAble !== null) {
            setBlog(editAble)
        } else {
            setBlog({
                title: "",
                description: ""
            })
        }
    }, [editAble])

    const handleChange = e => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value
        })
    }

    const onsubmit = e => {
        e.preventDefault()
        if (editAble !== null) {
            updateBlog(blog)
            clearEdit()
        } else {
            addBlog(blog)
            setBlog({
                title: "",
                description: ""
            })
        }
    }

    const { title, description } = blog;
    return (
        <div className="addblog">
            <h1>{editAble !== null ? 'Edit Blog' : "What's on your mind?"}</h1>
            <form onSubmit={onsubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />

                <textarea
                    type="textarea"
                    name="description"
                    placeholder="What's happening?"
                    value={description}
                    style={{ minHeight: "85px", marginTop: "15px" }}
                    onChange={handleChange}
                />
                <input type="submit" value={editAble !== null ? 'Update' : "Add"} className="btn" />
                {editAble !== null ? <input type="button" onClick ={clearEdit} value="Cancel" className="btn clear"/> : null}
                {/*<button className="btn" style={{backgroundColor:"red"}}>Cancel</button>*/}
            </form>

        </div>
    )
}

export default AddBlog;