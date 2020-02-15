import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
import { transactionStateConstant } from "../Constant";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getListTransactionRequest: null,
  getListTransactionSuccess: ["listTransaction"],
  getListTransactionFailure: null,

  refundTransactionRequest: ["tranId"],
});

export const ListTransactionTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  processing: false,
  listTransaction: []
})

/* ------------- Reducers ------------- */

export const getListTransactionRequest = state => {
  return state.merge({ processing: true })
}

export const getListTransactionSuccess = (state, { listTransaction }) => {
  return state.merge({ processing: false, listTransaction })
}

export const getListTransactionFailure = state => {
  return state.merge({ processing: false })
}

export const refundTransactionRequest = (state, { tranId }) => {
  const { listTransaction } = state
  const { items } = listTransaction;
  if (!listTransaction || !items || items.length === 0) return state;


  const newListTransactionItems = items.map((item) => {
    if (item.id === tranId) {
      return Object.assign(item.asMutable(), { state: transactionStateConstant.REFUNDED.value });
    }
    return item
  })

  const newListTransaction = Object.assign(listTransaction.asMutable(), { items: newListTransactionItems });

  return state.merge({
    listTransaction: newListTransaction
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LIST_TRANSACTION_REQUEST]: getListTransactionRequest,
  [Types.GET_LIST_TRANSACTION_SUCCESS]: getListTransactionSuccess,
  [Types.GET_LIST_TRANSACTION_FAILURE]: getListTransactionFailure,

  [Types.REFUND_TRANSACTION_REQUEST]: refundTransactionRequest
})
