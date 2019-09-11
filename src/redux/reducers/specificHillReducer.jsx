const specificHillReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SPECIFIC':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.hillList
export default specificHillReducer;
