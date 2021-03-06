import loginModeReducer from './loginModeReducer';

describe('testing loginModeReducer states', () => {
    test('should have its correct initial state', () => {
        let action = {};
        let newState = loginModeReducer(undefined, action);
        expect(newState).toEqual('login');
    })
    test('should set to login', () => {
        let action = { type: 'SET_TO_LOGIN_MODE' };
        let newState = loginModeReducer(undefined, action);
        expect(newState).toEqual('login')
    })
    test('should set to register', () => {
        let action = { type: 'SET_TO_REGISTER_MODE' };
        let newState = loginModeReducer(undefined, action);
        expect(newState).toEqual('register')
    })
})