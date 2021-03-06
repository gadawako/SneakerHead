import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import sneakerSaga from './sneaker.saga';
import userSaga from './user.saga';
import cartSaga from './cart.saga';
import getCart from './getcart.saga'
import sneakerinfo from './sneakerinfo.saga'
import addkicks from './addkicks.saga'
import deletekick from './delete.saga'
import update from './updateList.saga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    sneakerSaga(),
    cartSaga(),
    getCart(),
    sneakerinfo(),
    addkicks(),
    deletekick(),
    update()
  ]);
}
