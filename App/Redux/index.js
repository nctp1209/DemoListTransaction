import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  listTransaction: require('./ListTransactionRedux').reducer
})

export default () => {
  let finalReducers = reducers
  let { store } = configureStore(finalReducers, rootSaga)

  return store
};
