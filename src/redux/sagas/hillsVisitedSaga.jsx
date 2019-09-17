import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



//get all hills from the db that the user has commented and rated
function* fetchHillsVisited(action) {
    try {
        let response = yield axios.get('/api/hills/hillsvisited')
        console.log(response);
        yield put({ type: 'SET_HILLS_VISITED', payload: response.data })
    } catch (error) {
        console.log('error in Get on fetchHills', error);

    }
};

function* hillsVisitedSaga() {
    yield takeLatest('FETCH_HILLS_VISITED', fetchHillsVisited);
}

export default hillsVisitedSaga;