import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// import { response } from 'express';


function* getSneakerFromCartSaga() {
    console.log('sending sneakers to shopping cart')
    let response = yield axios({
        method: 'GET',
        url:`/cart`
    })
    console.log('in get cart',response)
    yield put({
        type: 'GET_CART',
        payload: response.data
    })
}

function* getcartSaga(){
    yield takeLatest('SEND_SNEAKER_TO_CART', getSneakerFromCartSaga)
}
export default getcartSaga;