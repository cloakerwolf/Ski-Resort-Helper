import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get all hills from the db
function* fetchHills(action) {
    try {
        let response = yield axios.get('/api/hills')
        console.log(response);
        yield put({ type: 'SET_HILL_LIST', payload: response.data })
    } catch (error) {
        console.log('error in Get on fetchHills', error);

    }
};

function* DeleteHill(action) {
    try {
        let deleteHill = yield axios.delete(`/api/hills/${action.payload}`);
        console.log('deleteHill', deleteHill.data);
        yield put({
            type: 'FETCH_HILL_LIST',
            payload: deleteHill.data
        })
    } catch (error) {
        console.log('error in the DeleteHill Saga', error);

    }
}


function* AddHill(action) {
    try {
        console.log('action payload', action.payload);
        yield axios.post('api/hills', action.payload);
        yield put({
            type: 'FETCH_HILL_LIST',
            payload: action.payload
        })
    } catch (error) {
        console.log('error in the AddHill Saga');

    }
}

function* hillListSaga() {
    yield takeLatest('FETCH_HILL_LIST', fetchHills);
    yield takeLatest('DELETE_HILL', DeleteHill);
    yield takeLatest('ADD_HILL', AddHill);
}

export default hillListSaga;


