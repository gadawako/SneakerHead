import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getSneakerFromCartSaga(action) {
    console.log('sending sneakers to shopping cart')
    console.log('in get cart',action.payload.userId)
    let response = yield axios({
        method: 'GET',
        url:`/cart/${action.payload.userId}`,
    })
    yield put({
        type: 'GET_CART',
        payload: response.data
    })
}

function* getcartSaga(){
    yield takeLatest('SEND_SNEAKER_TO_CART', getSneakerFromCartSaga)
}
export default getcartSaga;