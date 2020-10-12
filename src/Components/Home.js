import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Blogs from "./Blogs";
//import AddBlog from "./AddBlog";

const Home = () => {
    return (
        <Fragment>
            <div className="main">
            <div>
                <Link to='/addpost'>
                <button className="btn" style={{marginLeft:"-500px"}}>Add Post</button>
                </Link>
            </div>
            
           
            </div>
        </Fragment>
    )
}

export default Home;