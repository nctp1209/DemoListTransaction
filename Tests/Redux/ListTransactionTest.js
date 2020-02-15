import ListTransactionActions, {
  reducer,
  INITIAL_STATE
} from '../../App/Redux/ListTransactionRedux'

import Api from '../APIResult/APIResult'
import { transactionStateConstant } from '../../App/Constant'

test('getListTransactionRequestTest', () => {
  const state = reducer(
    INITIAL_STATE,
    ListTransactionActions.getListTransactionRequest()
  );
  expect(state.processing).toBe(true)
});

test('getListTransactionSuccessTest', () => {
  const result = Api.getListTransaction();
  const state = reducer(
    INITIAL_STATE,
    ListTransactionActions.getListTransactionSuccess(result)
  )
  expect(state.processing).toBe(false)
  expect(state.listTransaction).toMatchObject(result)
})

test('getListTransactionFailureTest', () => {
  const state = reducer(
    INITIAL_STATE,
    ListTransactionActions.getListTransactionFailure()
  )
  expect(state.processing).toBe(false)
  expect(state.listTransaction).toMatchObject([])
})

test('refundTransactionRequest', () => {
  const SampleData = Api.getListTransaction()
  const firstItems = SampleData.items[0]
  const newListTransactionsItems = SampleData.items.map((item) => {
    if (item.id === firstItems.id) {
      return Object.assign(item, { state: transactionStateConstant.REFUNDED.value });
    }
    return item
  })
  const newListTransaction = Object.assign(SampleData, { items: newListTransactionsItems })

  const result = Api.getListTransaction();
  const state = reducer(
    INITIAL_STATE,
    ListTransactionActions.getListTransactionSuccess(result)
  )

  // Get list transaction
  expect(state.processing).toBe(false)
  expect(state.listTransaction).toMatchObject(result)

  // Refund a transaction
  expect(state.processing).toBe(false)
  expect(state.listTransaction).toMatchObject(newListTransaction)
})
