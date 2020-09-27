import React, {useReducer} from 'react';
import BlogContext from './blogContext';
import BlogReducer from './blogReducer'


const BlogState = (props) =>{

    const initialState = {
        blogs:[
            {
                id: 1,
                title: "ditu",
                description:"Young Indian players can learn a lot from Andre Russell - Manoj Tiwary Young Indian players can learn a lot from Andre Russell - Manoj Tiwary TweetShareCopy URL So, KKR have something on the right most column in the points table. SRH still have a binary reading. They floundered it against RCB and today were slow off the blocks. "
            },
            {
                id: 2,
                title: "ditu",
                description:"Losses of different kinds. And that doesn't help as a team. They need to find answers to a few rhetorical questions sooner rather than later. As for KKR, they were solid today.",
                
            },
            {
                id: 3,
                title: "ditu",
                description:"They need to find answers to a few rhetorical questions sooner rather than later. As for KKR, they were solid today. Their skipper chopped and changed his bowlers as per his own whims and fancies.",
            },
            {
                id: 4,
                title: "ditu",
                description:"Young Indian players can learn a lot from Andre Russell - Manoj Tiwary Young Indian players can learn a lot from Andre Russell - Manoj Tiwary TweetShareCopy URL So, KKR have something on the right most column in the points table. SRH still have a binary reading. They floundered it against RCB and today were slow off the blocks. "
            },
            {
                id: 5,
                title: "ditu",
                description:"Losses of different kinds. And that doesn't help as a team. They need to find answers to a few rhetorical questions sooner rather than later. As for KKR, they were solid today.",
                
            },
            {
                id: 6,
                title: "ditu",
                description:"They need to find answers to a few rhetorical questions sooner rather than later. As for KKR, they were solid today. Their skipper chopped and changed his bowlers as per his own whims and fancies.",
            },
        ]
    }
    const [state, dispatch] = useReducer(BlogReducer, initialState)
    return(
        <div>
            <BlogContext.Provider value={{
                blogs:state.blogs,
            }}>
                {props.children}
                </BlogContext.Provider>
        </div>
    )

}

export default BlogState;