import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get specific hill from the db using the id
function* fetchSpecificHill(action) {
    try {
        let specific = yield axios.get(`/api/hills/${action.payload}`);
        console.log('Specific', specific.data);
        yield put({
            type: 'SET_SPECIFIC',
            payload: specific.data
        })

    } catch (error) {
        console.log('error in GET on fetchSpecificHill', error);

    }
}

function* EditHill(action) {
    try {
        yield axios.put(`/api/hills`, action.payload);
        yield put({
            type: 'FETCH_SPECIFIC_HILL',
            payload: action.payload.id
        })
    } catch (error) {
        console.log('error in put on EditHill', error);
        
    }
}

function* specificHillSaga() {
    yield takeLatest('FETCH_SPECIFIC_Hill', fetchSpecificHill);
    yield takeLatest('EDIT_HILL', EditHill);
}

export default specificHillSaga;