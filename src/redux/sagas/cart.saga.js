import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// import { response } from 'express';

// worker Saga: will be fired on "CART" actions

function* sendSneakerToCartSaga(action) {
    console.log('sending sneakers to shopping cart', action.type)
    let response = yield axios({
        method: 'POST',
        url:`/cart/${action.payload}`
    })
    yield put({
        type: 'SET_CART',
        payload: response.data
    })
}

function* cartSaga(){
    yield takeLatest('SEND_SNEAKER', sendSneakerToCartSaga)
}
export default cartSaga;