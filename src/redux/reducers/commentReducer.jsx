const commentReducer = (state = {comments: [], user: []}, action) => {
    switch (action.type) {
        case 'SET_COMMENT_RATING':
            return action.payload;
        default:
            return state;
    }
};




// user will be on the redux state at:
// state.hillList
export default commentReducer;