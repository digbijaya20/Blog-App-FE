import { ADD_BLOG, REMOVE_BLOG } from "./types";

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
        default:
            return state;
    }
}