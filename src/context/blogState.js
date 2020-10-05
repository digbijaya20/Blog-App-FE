import React, {useReducer} from 'react';
import BlogContext from './blogContext';
import BlogReducer from './blogReducer'
import {ADD_BLOG, REMOVE_BLOG} from './types'


const BlogState = (props) =>{

    const initialState = {
        blogs:[
            {
                id: 1,
                title: "ditu",
                description:"Young Indian players can learn a lot from Andre Russell - Manoj Tiwary Young Indian players can learn a lot from Andre Russell - Manoj Tiwary TweetShareCopy URL So, KKR have something on the right most column in the points table. SRH still have a binary reading. They floundered it against RCB and today were slow off the blocks. "
            },
          
        ]
    }
    const [state, dispatch] = useReducer(BlogReducer, initialState)

    const addBlog = (blog) =>{
        blog.id = Date.now()
        dispatch({
            type:ADD_BLOG,
            payload:blog,
        })
    }

    const removeBlog = (id) =>{
        dispatch({
            type:REMOVE_BLOG,
            payload:id
        })
    }
    return(
        <div>
            <BlogContext.Provider value={{
                blogs:state.blogs,
                addBlog,
                removeBlog,
            }}>
                {props.children}
                </BlogContext.Provider>
        </div>
    )

}

export default BlogState;