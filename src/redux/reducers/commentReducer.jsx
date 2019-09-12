const commentReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMMENT':
            return action.payload;
        default:
            return state;
    }
};




// user will be on the redux state at:
// state.hillList
export default commentReducer;