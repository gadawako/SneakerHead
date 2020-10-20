import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// import { response } from 'express';

function* sneakerInfoSaga(action) {
    console.log('getting sneaker info to shopping cart', action.payload)
    let response = yield axios({
        method: 'GET',
        url:`/cart`
    })
    yield put({
        type: 'SET_INFO',
        payload: response.data
    })
}

function* infoSaga(){
    yield takeLatest('SNEAKER_INFO', sneakerInfoSaga)
}
export default infoSaga;