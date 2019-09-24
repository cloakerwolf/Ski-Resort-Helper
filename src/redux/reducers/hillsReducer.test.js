import hillListReducer from './hillsReducer';

describe('testing hillsReducer states', () => {
    test('should have its correct initial state', () => {
        let action = {};
        let newState = hillListReducer(undefined, action);
        expect(newState).toEqual([]);
    })
    test('should set action.payload', () => {
        let action = { type: 'SET_HILL_LIST' };
        let newState = hillListReducer(undefined, action);
        expect(newState).toEqual(action.payload)
    })
    
})