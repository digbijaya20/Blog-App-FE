import { ADD_BLOG, REMOVE_BLOG,UPDATE_BLOG, EDIT_BLOG, CLEAR_EDIT } from "./types";

export default (state, {type, payload}) =>{
    switch(type) {
        case ADD_BLOG:
            return{
                ...state,
                blogs:[...state.blogs, payload]
            }
            case REMOVE_BLOG:
                return{
                    ...state,
                    blogs: state.blogs.filter(blog =>blog.id !== payload)
                }
            case UPDATE_BLOG:
            return {
                ...state,
                blogs: state.blogs.map(blog => blog.id === payload.id ? payload : blog)
            }

            case EDIT_BLOG:
                return{
                    ...state,
                    editAble: payload
                }
            case CLEAR_EDIT:
                return{
                    ...state,
                    editAble:null
                }
        default:
            return state;
    }
}