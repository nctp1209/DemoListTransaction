import { takeLatest, all } from "redux-saga/effects"
import { apiService } from '../Services'

/* ------------- Types ------------- */

import { ListTransactionTypes } from '../Redux/ListTransactionRedux';

/* ------------- Sagas ------------- */

import { getListTransaction } from './ListTransactionSagas'

/* ------------- API ------------- */
const api = apiService.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // Sagas for List Transaction Actions
    takeLatest(ListTransactionTypes.GET_LIST_TRANSACTION_REQUEST, getListTransaction, api)
  ]);
}
