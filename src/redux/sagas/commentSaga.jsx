import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addCommentSaga(action) {
    try {
        console.log('action payload', action.payload);

        yield axios.post(`/api/hills/comment`, action.payload);
        yield put({
            type: 'FETCH_USER_COMMENTS',
            payload: action.payload
        })
    } catch (error) {
        console.log('error in addCommentSaga', error);

    }
}

function* fetchCommentSaga(action) {
    try {
        let comments = yield axios.get(`/api/hills/comment/${action.payload}`);
        console.log('comments in fetchCommentSaga', comments.data);

        yield put({
            type: 'SET_COMMENT',
            payload: comments.data
        })
    } catch (error) {
        console.log('error in fetchCommentSaga:', error);

    }
}

function* fetchRatingSaga(action) {
    try {
        let ratings = yield axios.get(`/api/hills/rating/${action.payload}`);
        console.log('comments in fetchRatingSaga', ratings.data);

        yield put({
            type: 'SET_RATING',
            payload: ratings.data
        })
    } catch (error) {
        console.log('error in fetchRatingSaga:', error);

    }
}

function* fetchSagas(action) {
    yield put({
        type: 'FETCH_RATING_SAGA',
        payload: action.payload
    })
    yield put({
        type: 'FETCH_COMMENT_SAGA',
        payload: action.payload
    })
}

function* commentSaga() {
    yield takeLatest('ADD_USER_COMMENT_RATING', addCommentSaga);
    yield takeLatest('FETCH_USER_COMMENTS', fetchSagas);
    yield takeLatest('FETCH_RATING_SAGA', fetchRatingSaga);
    yield takeLatest('FETCH_COMMENT_SAGA', fetchCommentSaga);
}

export default commentSaga;
