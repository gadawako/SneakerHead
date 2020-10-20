import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MENU" actions
function* updateSize(action) {
    let response = yield axios({
        method: 'PUT',
        url: '/updatesize'
    })
    yield put({
        type: 'SET_SIZE',
        payload: response.data
    })
}; // end updateSize

function* updateSizeSaga() {
  yield takeLatest('UPDATE_SIZE', updateSize);
} // end updateSizeSaga

export default updateSizeSaga;