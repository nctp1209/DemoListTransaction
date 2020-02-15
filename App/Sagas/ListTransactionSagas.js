import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import ListTransactionActions from '../Redux/ListTransactionRedux'

export function* getListTransaction(api, action) {
  const response = yield call(api.getListTransaction)
  if (response) {
    yield put(ListTransactionActions.getListTransactionSuccess(response))
  } else {
    yield put(ListTransactionActions.getListTransactionFailure())
  }
}
