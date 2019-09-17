const hillsVisitedReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HILLS_VISITED':
            return action.payload;
        default:
            return state;
    }
};

// will be on the redux state at:
// state.hillsVisitedReducer
export default hillsVisitedReducer;
