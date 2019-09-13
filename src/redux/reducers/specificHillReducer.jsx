const specificHillReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SPECIFIC':
            return action.payload;
        case 'UPDATE_PROPERTY':
            return {
                ...state,
                [action.payload.key]: action.payload.newValue,
            };
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.hillList
export default specificHillReducer;
