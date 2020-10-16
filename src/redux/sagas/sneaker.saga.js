import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions

function* fetchSneakersSaga(action) {
    console.log('fetchSneakersSaga', action.type )
    let response = yield axios({
      method: 'GET',
      url: '/sneakers'
    })
    console.log('Grab sneakers', response.data)
    yield put({
      type: 'SET_SNEAKERS',
      payload: response.data
    })
  }

function* sneakerSaga() {
  yield takeLatest('FETCH_SNEAKERS', fetchSneakersSaga);
}

export default sneakerSaga;