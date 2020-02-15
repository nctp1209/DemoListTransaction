import { put, call } from "redux-saga/effects"
import { path } from "ramda"

import APIResult from '../APIResult/APIResult'
import { getListTransaction } from "../../App/Sagas/ListTransactionSagas"
import ListTransactioActions from "../../App/Redux/ListTransactionRedux"

const stepper = fn => mock => fn.next(mock).value

test("first calls API", () => {
  const step = stepper(getListTransaction(APIResult))
  // 1: Call API Step and check
  expect(step()).toEqual(call(APIResult.getListTransaction))
});

test("api return success", () => {
  const response = APIResult.getListTransaction()
  const step = stepper(getListTransaction(APIResult))
  // 1: Call API Step
  step();
  // 2: Return success response && check response
  const stepResponse = step(response)
  expect(stepResponse).toEqual(put(ListTransactioActions.getListTransactionSuccess(response)))
});

test("failure path", () => {
  const response = null
  const step = stepper(getListTransaction(APIResult))
  // 1: Call API Step
  step()
  // 2: Return failed response and check the flow
  const stepResponse = step(response)
  expect(stepResponse).toEqual(put(ListTransactioActions.getListTransactionFailure()))
})
