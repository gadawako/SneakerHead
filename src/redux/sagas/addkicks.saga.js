import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "Sneaker" actions

function* addSneakerSaga(action) {
  console.log('in saga add sneakers', action.payload)
    let response = yield axios({
      method: 'POST',
      url: '/sneakers',
      data: action.payload
    })
    console.log(response)
    yield put({
      type: 'SET_ADD',
      payload: response.data
    })
  }
  
function* addSaga() {
  yield takeLatest('ADD_SNEAKERS', addSneakerSaga);
}

export default addSaga;