import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* deleteCartSaga(action) {
    console.log('deleting sneaker from cart')
    let response = yield axios({
        method: 'DELETE',
        url:`/cart/${action.payload.userId}/${action.payload.sneakerId}`,
    })
    yield put({
        type: 'DELETE_UPDATE',
        payload: response.data
    })
}
function* deleteSaga(){
    yield takeLatest('REMOVE_SNEAKER_FROM_CART', deleteCartSaga)
}
export default deleteSaga;