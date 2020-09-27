import React from "react";

const AddBlog = () => {
    return(
        <div className="addblog">
            <h1>What's on your mind?</h1>
            <form>
                <input type="text" placeholder="Title"/>
                <textarea type="textarea" placeholder="What's happening?"/>
                <input type="submit" value="Add" className="btn" />
                <button className="btn" style={{backgroundColor:"red"}}>Cancel</button>
            </form>

        </div>
    )
}

export default AddBlog;