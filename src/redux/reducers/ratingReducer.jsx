const ratingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RATING':
            return action.payload;
        default:
            return state;
    }
};




// user will be on the redux state at:
// state.hillList
export default ratingReducer;