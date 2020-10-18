import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "Sneaker" actions

function* fetchSneakersSaga(action) {
    let response = yield axios({
      method: 'GET',
      url: '/sneakers'
    })
    yield put({
      type: 'SET_SNEAKERS',
      payload: response.data
    })
  }

function* sneakerSaga() {
  yield takeLatest('FETCH_SNEAKERS', fetchSneakersSaga);
}

export default sneakerSaga;