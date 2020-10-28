import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateListSaga(action) {
    console.log('update saga',action)
    let response = yield axios({
      method: 'PUT',
      url: '/sneakers',
      data: action.payload
    })
    yield put({
      type: 'SET_LIST',
      payload: response.data
    })
  }
function* updateSaga() {
  yield takeLatest('UPDATE_SNEAKER_LIST', updateListSaga);
}

export default updateSaga;