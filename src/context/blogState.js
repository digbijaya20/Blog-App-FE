import React, {useReducer} from 'react';
import BlogContext from './blogContext';
import BlogReducer from './blogReducer'
import {ADD_BLOG, REMOVE_BLOG, UPDATE_BLOG, EDIT_BLOG, CLEAR_EDIT} from './types'


const BlogState = (props) =>{

    const initialState = {
        editAble:null,
        blogs:[
            {
                id: 1,
                title: "CSK Vs KKR",
                description:"Young Indian players can learn a lot from Andre Russell - Manoj Tiwary Young Indian players can learn a lot from Andre Russell - Manoj Tiwary TweetShareCopy URL So, KKR have something on the right most column in the points table. SRH still have a binary reading. They floundered it against RCB and today were slow off the blocks. "
            },
          
        ]
    }
    const [state, dispatch] = useReducer(BlogReducer, initialState)

 //Add Blog

    const addBlog = (blog) =>{
        blog.id = Date.now()
        dispatch({
            type:ADD_BLOG,
            payload:blog,
        })
    }

 // Remove Blog
 
    const removeBlog = (id) =>{
        dispatch({
            type:REMOVE_BLOG,
            payload:id
        })
    }

// Update Blog

    const updateBlog = (blog) =>{
        dispatch({
            type:UPDATE_BLOG,
            payload:blog,
        })
    }

// Edit Blog

    const editBlog = (blog) =>{
        dispatch({
            type:EDIT_BLOG,
            payload:blog,
        })
    }

// Clear Edit

    const clearEdit = () =>{
        dispatch({
            type: CLEAR_EDIT
        })
    }
    return(
        <div>
            <BlogContext.Provider value={{
                blogs:state.blogs,
                editAble: state.editAble,
                addBlog,
                removeBlog,
                updateBlog,
                editBlog,
                clearEdit
            }}>
                {props.children}
                </BlogContext.Provider>
        </div>
    )

}

export default BlogState;