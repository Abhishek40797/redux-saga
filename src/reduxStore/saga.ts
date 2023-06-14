import  { put,takeEvery } from 'redux-saga/effects';
import { GET_USERS_FETCH,GET_USERS_SUCCESS } from '../constants';

function* workGetusersFetch():any{
    const users = yield fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json().catch(error => error));
    yield put({type:GET_USERS_SUCCESS,users})
}

export function* fetchUsersSaga() {
    yield takeEvery(GET_USERS_FETCH,workGetusersFetch);
}