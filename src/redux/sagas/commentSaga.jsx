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

function* fetchCommentSaga(action){
    try {
        let comments = yield axios.get(`/api/hills/comment/${action.payload}`);
        console.log('comments in fetchCommentSaga', comments.data);
        
        yield put({
                    type: 'SET_COMMENT_RATING',
                    payload: comments.data
    })
    } catch (error) {
        console.log('error in fetchCommentSaga:',error);
        
    }
}

function* commentSaga() {
    yield takeLatest('ADD_USER_COMMENT_RATING', addCommentSaga);
    yield takeLatest('FETCH_USER_COMMENTS', fetchCommentSaga)
}

export default commentSaga;
