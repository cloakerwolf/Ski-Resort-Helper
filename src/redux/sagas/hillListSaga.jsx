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

function* hillListSaga() {
    yield takeLatest('FETCH_HILL_LIST', fetchHills);
}

export default hillListSaga;