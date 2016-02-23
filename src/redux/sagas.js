import { cancel, fork, take, call, put } from 'redux-saga/effects'
import Api from '../lib/Api'

export function *helloSaga() {
  console.log('Sagas running properly...')
}

function *authorize(user, password) {
  try {
    const token = yield call(Api.authorize, user, password)
    yield put({type: 'LOGIN_SUCCESS', token})
    yield call(Api.storeItem({token}))
  } catch (err) {
    yield put({type: 'LOGIN_ERROR', err})
  }
}

function *loginFlow() {
  while (true) {
    const { user, password } = yield take('LOGIN_REQUEST')
    const task = yield fork(authorize, user, password)
    yield take('LOGOUT')
    yield cancel(task)
    yield call(Api.clearItem('token'))
  }
}
