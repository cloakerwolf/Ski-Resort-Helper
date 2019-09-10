const hillListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HILL_LIST':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.hillList
export default hillListReducer;
