function comments(state = [], action){
    switch (action.type){
        case 'ADD_COMMENT': 
            const i = action.postId
            const author = action.author
            const comment = action.comment
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes +1 },
                ...state.slice(i +1)
            ]
        default: return state
    }
}
export default comments